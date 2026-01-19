'use client';
import { useState, useEffect } from 'react';

export default function CDSAttendanceCoordinator({ cdsData, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [attendanceList, setAttendanceList] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState('not_started');
  const [dailyCode, setDailyCode] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [recordingMember, setRecordingMember] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const members = [
    { id: 1, name: 'John Doe', stateCode: 'NYSC/KG/2024/001', ppa: 'Tech Solutions Ltd', attendance: '95%', dues: 'Paid', status: 'active' },
    { id: 2, name: 'Sarah Smith', stateCode: 'NYSC/KG/2024/002', ppa: 'General Hospital', attendance: '88%', dues: 'Paid', status: 'active' },
    { id: 3, name: 'Michael Brown', stateCode: 'NYSC/KG/2024/003', ppa: 'Digital Hub', attendance: '75%', dues: 'Pending', status: 'active' },
    { id: 4, name: 'Emily Davis', stateCode: 'NYSC/KG/2024/004', ppa: 'Sports Academy', attendance: '92%', dues: 'Paid', status: 'active' },
    { id: 5, name: 'Robert Wilson', stateCode: 'NYSC/KG/2024/005', ppa: 'Farm Solutions', attendance: '60%', dues: 'Overdue', status: 'warning' },
    { id: 6, name: 'Lisa Anderson', stateCode: 'NYSC/KG/2024/006', ppa: 'Law Chambers', attendance: '45%', dues: 'Overdue', status: 'inactive' },
    { id: 7, name: 'David Miller', stateCode: 'NYSC/KG/2024/007', ppa: 'Green Earth', attendance: '100%', dues: 'Paid', status: 'active' },
    { id: 8, name: 'Jennifer Lee', stateCode: 'NYSC/KG/2024/008', ppa: 'Tech Academy', attendance: '85%', dues: 'Paid', status: 'active' }
  ];

  const statuses = ['all', 'present', 'absent', 'late'];

  useEffect(() => {
    generateDailyCode();
    loadAttendanceForDate();
  }, [selectedDate]);

  const generateDailyCode = () => {
    const code = Math.random().toString(36).substring(2, 6).toUpperCase();
    setDailyCode(code);
  };

  const loadAttendanceForDate = () => {
    const stored = localStorage.getItem(`attendance_${selectedDate}`);
    if (stored) {
      setAttendanceList(JSON.parse(stored));
      setAttendanceStatus('completed');
    } else {
      const initialList = members.map(member => ({
        ...member,
        attendanceStatus: 'absent',
        markedBy: '',
        markedAt: '',
        voiceEvidence: null,
        verificationCode: ''
      }));
      setAttendanceList(initialList);
      setAttendanceStatus('not_started');
    }
  };

  const startAttendanceSession = () => {
    setAttendanceStatus('in_progress');
    alert('Attendance session started! CDS time window is now open.');
  };

  const endAttendanceSession = () => {
    setAttendanceStatus('completed');
    localStorage.setItem(`attendance_${selectedDate}`, JSON.stringify(attendanceList));
    alert('Attendance session ended and locked!');
  };

  const markAttendance = (memberId, status) => {
    if (attendanceStatus !== 'in_progress') {
      alert('Attendance session not active. Start session first.');
      return;
    }

    const updatedList = attendanceList.map(member => {
      if (member.id === memberId) {
        return {
          ...member,
          attendanceStatus: status,
          markedBy: 'Coordinator',
          markedAt: new Date().toLocaleTimeString(),
          verificationCode: dailyCode
        };
      }
      return member;
    });
    setAttendanceList(updatedList);
  };

  const startVoiceRecording = async (member) => {
    if (attendanceStatus !== 'in_progress') {
      alert('Start attendance session first.');
      return;
    }

    setRecordingMember(member);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      
      const audioChunks = [];
      recorder.ondataavailable = event => audioChunks.push(event.data);
      
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        
        const updatedList = attendanceList.map(m => {
          if (m.id === member.id) {
            return {
              ...m,
              voiceEvidence: audioUrl,
              attendanceStatus: 'present',
              markedBy: 'Coordinator',
              markedAt: new Date().toLocaleTimeString()
            };
          }
          return m;
        });
        setAttendanceList(updatedList);
      };
      
      recorder.start();
      setIsRecording(true);
      setTimeout(() => {
        if (recorder.state === 'recording') {
          recorder.stop();
          setIsRecording(false);
          stream.getTracks().forEach(track => track.stop());
        }
      }, 5000);
      
    } catch (error) {
      alert('Microphone access denied. Please allow microphone access.');
    }
  };

  const markBulkAttendance = (status) => {
    if (attendanceStatus !== 'in_progress') {
      alert('Start attendance session first.');
      return;
    }

    const updatedList = attendanceList.map(member => ({
      ...member,
      attendanceStatus: status,
      markedBy: 'Coordinator',
      markedAt: new Date().toLocaleTimeString(),
      verificationCode: dailyCode
    }));
    setAttendanceList(updatedList);
    alert(`All members marked as ${status.toUpperCase()}`);
  };

  const filteredMembers = attendanceList.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.stateCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || member.attendanceStatus === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const presentCount = attendanceList.filter(m => m.attendanceStatus === 'present').length;
  const absentCount = attendanceList.filter(m => m.attendanceStatus === 'absent').length;
  const lateCount = attendanceList.filter(m => m.attendanceStatus === 'late').length;

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">CDS Attendance Management</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Date: {selectedDate}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            
            <button
              onClick={startAttendanceSession}
              disabled={attendanceStatus !== 'not_started'}
              className={`px-4 py-2 rounded-lg font-medium ${attendanceStatus === 'not_started' ? 'bg-[#008753] text-white hover:bg-[#006b42]' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}
            >
              Start Attendance
            </button>
            
            <button
              onClick={endAttendanceSession}
              disabled={attendanceStatus !== 'in_progress'}
              className={`px-4 py-2 rounded-lg font-medium ${attendanceStatus === 'in_progress' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}
            >
              End & Lock
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{presentCount}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Present</div>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{absentCount}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Absent</div>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{lateCount}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Late</div>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{dailyCode}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Daily Code</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or state code..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-full md:w-64"
            />
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="late">Late</option>
            </select>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => markBulkAttendance('present')}
              disabled={attendanceStatus !== 'in_progress'}
              className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 disabled:opacity-50"
            >
              Mark All Present
            </button>
            <button
              onClick={() => markBulkAttendance('absent')}
              disabled={attendanceStatus !== 'in_progress'}
              className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800/50 disabled:opacity-50"
            >
              Mark All Absent
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Member</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">State Code</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Current Status</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Actions</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Evidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredMembers.map(member => (
              <tr key={member.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{member.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{member.ppa}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-mono text-gray-900 dark:text-gray-300">{member.stateCode}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    member.attendanceStatus === 'present' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                    member.attendanceStatus === 'absent' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                  }`}>
                    {member.attendanceStatus.toUpperCase()}
                  </span>
                  {member.markedAt && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {member.markedAt} by {member.markedBy}
                    </div>
                  )}
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => markAttendance(member.id, 'present')}
                      disabled={attendanceStatus !== 'in_progress'}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 disabled:opacity-50 text-sm"
                    >
                      Present
                    </button>
                    <button
                      onClick={() => markAttendance(member.id, 'absent')}
                      disabled={attendanceStatus !== 'in_progress'}
                      className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800/50 disabled:opacity-50 text-sm"
                    >
                      Absent
                    </button>
                    <button
                      onClick={() => markAttendance(member.id, 'late')}
                      disabled={attendanceStatus !== 'in_progress'}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800/50 disabled:opacity-50 text-sm"
                    >
                      Late
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => startVoiceRecording(member)}
                      disabled={attendanceStatus !== 'in_progress' || isRecording}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 disabled:opacity-50 text-sm"
                    >
                      {isRecording && recordingMember?.id === member.id ? 'Recording...' : 'Voice Verify'}
                    </button>
                    {member.voiceEvidence && (
                      <button
                        onClick={() => new Audio(member.voiceEvidence).play()}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/50 text-sm"
                      >
                        Play
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredMembers.length} of {members.length} members • Session: {attendanceStatus.replace('_', ' ').toUpperCase()}
          </div>
          <div className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Today's Code: </span>
            <span className="font-bold text-gray-900 dark:text-white">{dailyCode}</span>
          </div>
        </div>
      </div>

      {recordingMember && (
        <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Voice Verification</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recording for: {recordingMember.name} ({recordingMember.stateCode})
              </p>
            </div>
            <button
              onClick={() => {
                setRecordingMember(null);
                setIsRecording(false);
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                  mediaRecorder.stop();
                }
              }}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              {isRecording ? (
                <div className="animate-pulse text-red-600 dark:text-red-400 font-medium">
                  🎤 Recording... Speak now
                </div>
              ) : audioURL ? (
                <div className="text-green-600 dark:text-green-400 font-medium">
                  ✓ Recording complete
                </div>
              ) : (
                <div className="text-gray-600 dark:text-gray-400">
                  Click "Voice Verify" to start recording
                </div>
              )}
            </div>
            
            {audioURL && (
              <div className="flex flex-col items-center space-y-2">
                <audio controls src={audioURL} className="w-full" />
                <button
                  onClick={() => new Audio(audioURL).play()}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Play Recording
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}