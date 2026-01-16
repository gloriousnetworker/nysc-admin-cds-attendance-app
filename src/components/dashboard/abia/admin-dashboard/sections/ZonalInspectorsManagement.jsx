export default function AdminOverviewSection({ adminData, darkMode }) {
  const stats = [
    { label: 'Total Corpers', value: '1,247', change: '+12%', icon: '👤', color: 'bg-blue-500' },
    { label: 'CDS Groups', value: '24', change: '+2', icon: '🏛️', color: 'bg-green-500' },
    { label: 'PPA Registered', value: '856', change: '+48', icon: '🏢', color: 'bg-purple-500' },
    { label: 'Today Attendance', value: '85%', change: '+3%', icon: '📊', color: 'bg-yellow-500' },
    { label: 'Active Admins', value: '32', change: '+3', icon: '👑', color: 'bg-red-500' },
    { label: 'Pending Issues', value: '18', change: '-4', icon: '⚠️', color: 'bg-orange-500' }
  ];

  const recentActivities = [
    { time: '5 min ago', user: 'John Doe', action: 'marked attendance', location: 'Lagos CDS', status: 'success' },
    { time: '15 min ago', action: 'New PPA registered', details: 'Tech Solutions Ltd', status: 'info' },
    { time: '30 min ago', user: 'Sarah Johnson', action: 'updated profile', location: 'Education CDS', status: 'success' },
    { time: '2 hours ago', action: 'System backup completed', details: 'Database backup', status: 'success' },
    { time: '4 hours ago', user: 'Admin User', action: 'generated monthly report', status: 'success' }
  ];

  const quickActions = [
    { title: 'Add New User', description: 'Register new corper', icon: '👤', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { title: 'Create Report', description: 'Generate analytics', icon: '📈', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { title: 'Manage CDS', description: 'View all groups', icon: '🏛️', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { title: 'System Settings', description: 'Configure system', icon: '⚙️', color: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                <span className="text-lg">{stat.icon}</span>
              </div>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`p-4 rounded-xl text-left hover:scale-[1.02] transition-transform ${action.color}`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{action.icon}</span>
                    <div className="font-bold">{action.title}</div>
                  </div>
                  <div className={`text-sm ${darkMode ? 'opacity-80' : ''}`}>{action.description}</div>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">System Status</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Database</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mr-2">
                      <div className="w-3/4 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-medium">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Server Uptime</span>
                  <span className="font-medium text-green-600 dark:text-green-400">99.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Active Sessions</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">1,142</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className={`flex items-start p-3 rounded-lg ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'}`}>
                  <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                    activity.status === 'success' ? 'bg-green-500' : 
                    activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 dark:text-white">
                      {activity.user && <span className="text-[#008753] dark:text-green-400">{activity.user} </span>}
                      {activity.action}
                    </div>
                    {activity.details && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">{activity.details}</div>
                    )}
                    <div className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-[#008753] to-[#00a86b] text-white'}`}>
            <h3 className="text-xl font-bold mb-4">Welcome, {adminData?.fullName}!</h3>
            <p className="mb-4 opacity-90">
              You are logged in as <span className="font-bold">Super Administrator</span>.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-white text-[#008753] py-3 rounded-lg hover:bg-gray-100 transition font-bold">
                View All Users
              </button>
              <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition font-medium">
                Generate System Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">System Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-3xl font-bold text-[#008753] dark:text-green-400">1,247</div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">Total Corpers</div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 12% from last month</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">92%</div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">System Uptime</div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-2">Optimal performance</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">856</div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">Active PPAs</div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 48 new this month</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">A+</div>
            <div className="text-gray-600 dark:text-gray-400 mt-2">System Health</div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-2">All systems normal</div>
          </div>
        </div>
      </div>
    </div>
  );
}