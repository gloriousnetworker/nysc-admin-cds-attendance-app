'use client';
import { useState } from 'react';

export default function AdminOverview({ adminData, darkMode }) {
  const [stats, setStats] = useState([
    { label: 'Total Corpers', value: '1,247', change: '+12%', icon: '🎓', color: 'bg-blue-500' },
    { label: 'PPA Owners', value: '856', change: '+48', icon: '🏢', color: 'bg-purple-500' },
    { label: 'CDS Coordinators', value: '42', change: '+3', icon: '👥', color: 'bg-yellow-500' },
    { label: 'LG Inspectors', value: '156', change: '+8', icon: '🏛️', color: 'bg-indigo-500' },
    { label: 'Zonal Inspectors', value: '24', change: '+2', icon: '🌍', color: 'bg-pink-500' },
    { label: 'Active Admins', value: '32', change: '+4', icon: '👑', color: 'bg-red-500' }
  ]);

  const [recentActivities] = useState([
    { user: 'John Doe', role: 'Corper', action: 'marked attendance', time: '5 min ago', status: 'success' },
    { user: 'Sarah Johnson', role: 'CDS Coordinator', action: 'updated group', time: '15 min ago', status: 'success' },
    { user: 'Tech Solutions', role: 'PPA Owner', action: 'registered new PPA', time: '30 min ago', status: 'info' },
    { user: 'Admin', role: 'Super Admin', action: 'generated system report', time: '2 hours ago', status: 'success' },
    { user: 'Mr. Adebayo', role: 'LG Inspector', action: 'verified 5 corpers', time: '3 hours ago', status: 'success' }
  ]);

  const [quickActions] = useState([
    { title: 'Add New Corper', description: 'Register new NYSC corper', icon: '🎓', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { title: 'Register PPA', description: 'Add new organization', icon: '🏢', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { title: 'Assign Coordinator', description: 'Assign CDS coordinator', icon: '👥', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' },
    { title: 'Generate Report', description: 'Create system analytics', icon: '📈', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' }
  ]);

  const handleQuickAction = (action) => {
    alert(`Initiating: ${action.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} hover:shadow-md transition-all duration-300`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className={`p-4 rounded-lg hover:opacity-90 transition text-left ${action.color}`}
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
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">System Status</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Database Health</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                      <div className="w-3/4 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Server Uptime</span>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">99.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Active Sessions</span>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">1,142</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className={`flex items-start p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition`}>
                <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                  activity.status === 'success' ? 'bg-green-500' : 
                  activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 dark:text-white text-sm">
                    <span className="text-[#008753] dark:text-green-400">{activity.user}</span> ({activity.role})
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{activity.action}</div>
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

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-[#008753] to-[#00a86b] text-white'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Welcome, {adminData?.fullName}!</h3>
            <p className="opacity-90">
              You are logged in as <span className="font-bold">Super Administrator</span> with full system access.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button className="bg-white text-[#008753] px-4 py-2 rounded-lg hover:bg-gray-100 transition font-bold text-sm">
              View All Users
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition font-medium text-sm">
              System Report
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">12</div>
            <div className="text-sm opacity-90">States Covered</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">24</div>
            <div className="text-sm opacity-90">CDS Groups</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">98%</div>
            <div className="text-sm opacity-90">System Uptime</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">A+</div>
            <div className="text-sm opacity-90">Performance</div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">User Distribution by Role</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,247</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Corpers</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">↑ 12%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">856</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">PPA Owners</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">↑ 5%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">42</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">CDS Coordinators</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">↑ 8%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">156</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">LG Inspectors</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">↑ 3%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">24</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Zonal Inspectors</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">↑ 10%</div>
          </div>
        </div>
      </div>
    </div>
  );
}