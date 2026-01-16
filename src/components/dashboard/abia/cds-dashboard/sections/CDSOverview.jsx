'use client';
import { useState } from 'react';

export default function CDSOverview({ cdsData, darkMode }) {
  const [stats] = useState([
    { label: 'Total Members', value: '48', change: '+3', icon: '👥', color: 'bg-blue-500' },
    { label: 'Attendance Rate', value: '88%', change: '+2%', icon: '📊', color: 'bg-green-500' },
    { label: 'Active Members', value: '42', change: '+1', icon: '✅', color: 'bg-purple-500' },
    { label: 'Pending Dues', value: '₦12,400', change: '-₦2,400', icon: '💰', color: 'bg-yellow-500' },
    { label: 'Activities', value: '6', change: '+1', icon: '🏃', color: 'bg-indigo-500' },
    { label: 'Meetings', value: '24', change: '+2', icon: '📅', color: 'bg-pink-500' }
  ]);

  const [recentActivities] = useState([
    { member: 'John Doe', action: 'marked attendance', time: '5 min ago', status: 'success' },
    { member: 'Sarah Smith', action: 'paid CDS dues', time: '15 min ago', status: 'success' },
    { system: true, action: 'Weekly meeting reminder', time: '2 hours ago', status: 'info' },
    { member: 'Michael Brown', action: 'joined group', time: '1 day ago', status: 'success' },
    { member: 'Emily Davis', action: 'uploaded activity photo', time: '2 days ago', status: 'success' }
  ]);

  const [quickActions] = useState([
    { title: 'Mark Attendance', description: 'Take attendance for today', icon: '📝', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { title: 'Add Member', description: 'Register new member', icon: '👥', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { title: 'Create Activity', description: 'Plan new activity', icon: '🏃', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { title: 'Generate Report', description: 'Create monthly report', icon: '📈', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' }
  ]);

  const handleQuickAction = (action) => {
    alert(`Initiating: ${action.title}`);
  };

  const markAttendance = () => {
    alert('Opening attendance marking interface...');
  };

  return (
    <div className="space-y-6 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-md transition-all duration-300`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-medium ${stat.change.startsWith('+') || stat.change.startsWith('₦-') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className={`p-4 rounded-lg hover:opacity-90 transition-colors duration-300 text-left ${action.color}`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-3">{action.icon}</span>
                    <div className="font-bold">{action.title}</div>
                  </div>
                  <div className={`text-xs ${darkMode ? 'opacity-80' : 'opacity-90'}`}>{action.description}</div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Next Meeting</h4>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} transition-colors duration-300`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Monthly CDS Meeting</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Wednesday, March 15, 2024</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Community Hall, Ikeja | 10:00 AM</div>
                  </div>
                  <button className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition-colors duration-300 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className={`flex items-start p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-300`}>
                <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {activity.member && <span className="text-[#008753] dark:text-green-400">{activity.member}</span>}
                    {activity.system && <span className="text-blue-600 dark:text-blue-400">System</span>} {activity.action}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-center text-sm text-[#008753] dark:text-green-400 hover:underline">
            View All Activities →
          </button>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-[#008753] to-[#00a86b] text-white'} transition-colors duration-300`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Welcome, {cdsData?.fullName}!</h3>
            <p className="opacity-90">
              You are coordinating <span className="font-bold">{cdsData?.cdsGroup}</span> CDS group in <span className="font-bold">{cdsData?.localGovernment}</span>, {cdsData?.state}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button 
              onClick={markAttendance}
              className="bg-white text-[#008753] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-sm"
            >
              Mark Today's Attendance
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 font-medium text-sm">
              View All Members
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">48</div>
            <div className="text-sm opacity-90">Total Members</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">88%</div>
            <div className="text-sm opacity-90">Attendance Rate</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">₦124,800</div>
            <div className="text-sm opacity-90">Total Dues Collected</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">A</div>
            <div className="text-sm opacity-90">Group Rating</div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Attendance Trend (Last 7 Days)</h3>
        <div className="flex items-end h-32 space-x-2">
          {[65, 72, 68, 80, 85, 82, 88].map((percent, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className={`w-full ${darkMode ? 'bg-green-600' : 'bg-green-500'} rounded-t-lg`}
                style={{ height: `${percent}%` }}
              ></div>
              <div className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Attendance: 77%</span>
          <button className="text-sm text-[#008753] dark:text-green-400 hover:underline">
            View Detailed Report →
          </button>
        </div>
      </div>
    </div>
  );
}