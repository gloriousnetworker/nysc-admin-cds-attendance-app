'use client';
import { useState } from 'react';

export default function CDSMembers({ cdsData, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { id: 1, name: 'John Doe', stateCode: 'NYSC/ABJ/2024/001', ppa: 'Tech Solutions Ltd', attendance: '95%', dues: 'Paid', status: 'active', lastSeen: 'Today' },
    { id: 2, name: 'Sarah Smith', stateCode: 'NYSC/ABJ/2024/002', ppa: 'General Hospital', attendance: '88%', dues: 'Paid', status: 'active', lastSeen: 'Today' },
    { id: 3, name: 'Michael Brown', stateCode: 'NYSC/ABJ/2024/003', ppa: 'Digital Hub', attendance: '75%', dues: 'Pending', status: 'active', lastSeen: 'Yesterday' },
    { id: 4, name: 'Emily Davis', stateCode: 'NYSC/ABJ/2024/004', ppa: 'Sports Academy', attendance: '92%', dues: 'Paid', status: 'active', lastSeen: 'Today' },
    { id: 5, name: 'Robert Wilson', stateCode: 'NYSC/ABJ/2024/005', ppa: 'Farm Solutions', attendance: '60%', dues: 'Overdue', status: 'warning', lastSeen: '3 days ago' },
    { id: 6, name: 'Lisa Anderson', stateCode: 'NYSC/ABJ/2024/006', ppa: 'Law Chambers', attendance: '45%', dues: 'Overdue', status: 'inactive', lastSeen: '1 week ago' },
    { id: 7, name: 'David Miller', stateCode: 'NYSC/ABJ/2024/007', ppa: 'Green Earth', attendance: '100%', dues: 'Paid', status: 'active', lastSeen: 'Today' },
    { id: 8, name: 'Jennifer Lee', stateCode: 'NYSC/ABJ/2024/008', ppa: 'Tech Academy', attendance: '85%', dues: 'Paid', status: 'active', lastSeen: 'Today' }
  ];

  const statuses = ['all', 'active', 'warning', 'inactive'];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.stateCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddMember = () => {
    alert('Add new member form will open');
  };

  const handleViewMember = (member) => {
    setSelectedMember(member);
  };

  const handleSendMessage = (member) => {
    alert(`Send message to: ${member.name}`);
  };

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Group Members</h3>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search members..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            />
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            >
              {statuses.map(status => (
                <option key={status} value={status} className="dark:bg-gray-800">
                  {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
            
            <button
              onClick={handleAddMember}
              className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition-colors duration-300 font-medium"
            >
              + Add Member
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Member Details</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">State Code</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">PPA</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Attendance</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Dues</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Status</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredMembers.map(member => (
              <tr key={member.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} style={{transition: 'background-color 0.3s ease'}}>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{member.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Last seen: {member.lastSeen}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-300">{member.stateCode}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-900 dark:text-gray-300 truncate max-w-[120px]">{member.ppa}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className={`w-16 h-2 rounded-full mr-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-2 rounded-full ${
                          parseInt(member.attendance) >= 80 ? 'bg-green-500' :
                          parseInt(member.attendance) >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: member.attendance }}
                      ></div>
                    </div>
                    <span className={`text-xs font-medium ${
                      parseInt(member.attendance) >= 80 ? 'text-green-600 dark:text-green-400' :
                      parseInt(member.attendance) >= 60 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {member.attendance}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    member.dues === 'Paid' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                    member.dues === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}>
                    {member.dues}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    member.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                    member.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewMember(member)}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 text-xs transition-colors duration-300"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleSendMessage(member)}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 text-xs transition-colors duration-300"
                    >
                      Message
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-5 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredMembers.length} of {members.length} members
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm transition-colors duration-300">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#008753] text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm transition-colors duration-300">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm transition-colors duration-300">
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedMember && (
        <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Member Details</h4>
            <button
              onClick={() => setSelectedMember(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Full Name</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedMember.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">State Code</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedMember.stateCode}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">PPA</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedMember.ppa}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Attendance</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedMember.attendance}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Dues Status</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedMember.dues}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Last Seen</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedMember.lastSeen}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006b42] transition-colors duration-300 text-sm font-medium">
                View Full Profile
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                Send Reminder
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                View Attendance
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Group Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-[#008753] dark:text-green-400">48</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Members</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">88%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Attendance</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">42</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Active Members</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">6</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Need Attention</div>
          </div>
        </div>
      </div>
    </div>
  );
}