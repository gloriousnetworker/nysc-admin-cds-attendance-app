'use client';
import { useState } from 'react';

export default function PPAOverview({ ppaData, darkMode }) {
  const [stats] = useState([
    { label: 'Active Corpers', value: '8', change: '+1', icon: '🎓', color: 'bg-blue-500' },
    { label: 'Attendance Today', value: '87%', change: '+2%', icon: '📊', color: 'bg-green-500' },
    { label: 'Avg. Performance', value: '4.8', change: '+0.2', icon: '⭐', color: 'bg-purple-500' },
    { label: 'Tasks Completed', value: '42', change: '+5', icon: '✅', color: 'bg-yellow-500' },
    { label: 'Training Hours', value: '124', change: '+12', icon: '⏰', color: 'bg-indigo-500' },
    { label: 'PPA Rating', value: '4.9', change: '+0.1', icon: '🏢', color: 'bg-pink-500' }
  ]);

  const [recentActivities] = useState([
    { corper: 'John Doe', action: 'submitted weekly report', time: '2 hours ago', status: 'completed' },
    { corper: 'Sarah Smith', action: 'completed training module', time: '4 hours ago', status: 'completed' },
    { system: true, action: 'Monthly evaluation due tomorrow', time: '1 day ago', status: 'pending' },
    { corper: 'Michael Brown', action: 'marked present today', time: 'Today', status: 'completed' },
    { system: true, action: 'PPA verification updated', time: '3 days ago', status: 'completed' }
  ]);

  const [quickActions] = useState([
    { title: 'Mark Attendance', description: 'Take attendance for today', icon: '📝', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { title: 'Add Evaluation', description: 'Evaluate corper performance', icon: '⭐', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { title: 'Generate Report', description: 'Create monthly report', icon: '📈', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { title: 'Update Schedule', description: 'Modify work schedule', icon: '📅', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' }
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
              <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Today's Schedule</h4>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} transition-colors duration-300`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Monthly Team Meeting</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Today, 2:00 PM - 4:00 PM</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Conference Room | All corpers required</div>
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
                  activity.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {activity.corper && <span className="text-[#008753] dark:text-green-400">{activity.corper}</span>}
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
            <h3 className="text-xl font-bold mb-2">Welcome, {ppaData?.fullName}!</h3>
            <p className="opacity-90">
              You are managing <span className="font-bold">{ppaData?.organization}</span> in <span className="font-bold">{ppaData?.localGovernment}</span>, {ppaData?.state}.
            </p>
            <p className="opacity-90 mt-2">
              PPA Status: <span className="font-bold">{ppaData?.verified ? 'Verified ✓' : 'Pending Verification'}</span> | Rating: <span className="font-bold">{ppaData?.rating}/5.0</span>
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
              View All Corpers
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">8</div>
            <div className="text-sm opacity-90">Active Corpers</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">87%</div>
            <div className="text-sm opacity-90">Today's Attendance</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">4.8</div>
            <div className="text-sm opacity-90">Avg. Performance</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">124</div>
            <div className="text-sm opacity-90">Training Hours</div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Corper Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Attendance This Week</h4>
            <div className="space-y-3">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                <div key={day} className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{day}</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2">
                      <div 
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${[88, 92, 85, 90, 87][index]}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-900 dark:text-white">{[88, 92, 85, 90, 87][index]}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Top Performers</h4>
            <div className="space-y-3">
              {[
                { name: 'John Doe', performance: '4.9', tasks: '42' },
                { name: 'Sarah Smith', performance: '4.8', tasks: '38' },
                { name: 'Michael Brown', performance: '4.7', tasks: '35' },
                { name: 'Emily Davis', performance: '4.6', tasks: '32' }
              ].map((corper, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                      {corper.name.charAt(0)}
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{corper.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{corper.performance}</span>
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">
                      {corper.tasks} tasks
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}