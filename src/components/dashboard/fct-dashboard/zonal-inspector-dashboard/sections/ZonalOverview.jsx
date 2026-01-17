'use client';

export default function ZonalOverview({ zonalData, darkMode }) {
  const stats = [
    { title: 'Total FCT Areas', value: '10', change: '+0', icon: '🗺️', color: 'bg-blue-500' },
    { title: 'Active LGIs', value: '42', change: '+2', icon: '🏛️', color: 'bg-green-500' },
    { title: 'Total PPAs', value: '187', change: '+12', icon: '🏢', color: 'bg-purple-500' },
    { title: 'Corpers This Month', value: '873', change: '+34', icon: '🎓', color: 'bg-indigo-500' },
    { title: 'Clearance Pending', value: '23', change: '-5', icon: '✅', color: 'bg-yellow-500' },
    { title: 'Zone Rating', value: '4.8/5', change: '+0.2', icon: '⭐', color: 'bg-pink-500' }
  ];

  const recentActivities = [
    { id: 1, activity: 'Approved clearance for John Doe', time: '10 min ago', area: 'Garki' },
    { id: 2, activity: 'New LGI registered in Maitama', time: '30 min ago', area: 'Maitama' },
    { id: 3, activity: 'Monthly report generated', time: '2 hours ago', area: 'All Areas' },
    { id: 4, activity: 'PPA inspection completed', time: '5 hours ago', area: 'Wuse' },
    { id: 5, activity: 'Attendance audit conducted', time: '1 day ago', area: 'Central Area' }
  ];

  const areaPerformance = [
    { area: 'Central Area', corpers: 120, attendance: 95, rating: 4.9 },
    { area: 'Garki', corpers: 98, attendance: 92, rating: 4.7 },
    { area: 'Wuse', corpers: 145, attendance: 89, rating: 4.5 },
    { area: 'Maitama', corpers: 87, attendance: 96, rating: 4.8 },
    { area: 'Asokoro', corpers: 76, attendance: 94, rating: 4.6 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-5 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.title}</p>
                <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stat.value}</p>
                <p className={`text-xs mt-1 ${parseFloat(stat.change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{activity.activity}</p>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-gray-600 dark:text-gray-400`}>
                      {activity.area}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{activity.time}</span>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2.5 text-center text-sm font-medium text-[#008753] dark:text-green-400 hover:text-[#006b42] dark:hover:text-green-300 rounded-lg border border-[#008753] dark:border-green-400 hover:border-[#006b42] dark:hover:border-green-300 transition">
            View All Activities
          </button>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">FCT Area Performance</h3>
          <div className="space-y-4">
            {areaPerformance.map((area, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{area.area}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{area.corpers} corpers</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#008753] to-[#00a86b] h-2 rounded-full" 
                      style={{ width: `${area.attendance}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{area.attendance}% attendance</span>
                    <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">⭐ {area.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FCT Zone Summary</h3>
          <button className="bg-gradient-to-r from-[#008753] to-[#00a86b] text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm font-medium">
            Generate Monthly Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
            <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">FCT Jurisdiction</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">10 Areas</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Federal Capital Territory</div>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
            <div className="text-sm text-green-700 dark:text-green-300 font-medium">Active This Month</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">92%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">System activity rate</div>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
            <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">Total Inspections</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">156</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Completed this quarter</div>
          </div>
        </div>
      </div>
    </div>
  );
}