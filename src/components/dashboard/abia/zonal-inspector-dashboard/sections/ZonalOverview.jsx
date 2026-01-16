'use client';
import { useState } from 'react';

export default function ZonalOverview({ zonalData, darkMode }) {
  const [stats] = useState([
    { label: 'Total States', value: zonalData?.states?.length || 6, change: '+0', icon: '🗺️', color: 'bg-blue-500' },
    { label: 'Active LGIs', value: '48', change: '+2', icon: '🏛️', color: 'bg-green-500' },
    { label: 'Total Corpers', value: '4,872', change: '+124', icon: '🎓', color: 'bg-purple-500' },
    { label: 'Zone Rating', value: '4.7', change: '+0.1', icon: '⭐', color: 'bg-yellow-500' },
    { label: 'Active PPAs', value: '1,248', change: '+48', icon: '🏢', color: 'bg-indigo-500' },
    { label: 'Pending Clearance', value: '24', change: '-3', icon: '✅', color: 'bg-pink-500' }
  ]);

  const [recentActivities] = useState([
    { state: 'Lagos', description: 'Monthly state report submitted', time: '2 hours ago', status: 'completed' },
    { lgi: 'Mr. Adebayo', description: 'LGI performance review completed', time: '4 hours ago', status: 'completed' },
    { clearance: true, description: '12 clearance requests received', time: '1 day ago', status: 'pending' },
    { state: 'Ogun', description: 'State inspection completed', time: '2 days ago', status: 'completed' },
    { system: true, description: 'Zone quarterly report generated', time: '3 days ago', status: 'completed' }
  ]);

  const [quickActions] = useState([
    { title: 'Review LGIs', description: 'Evaluate LGI performance', icon: '🏛️', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { title: 'Generate Report', description: 'Create zonal quarterly report', icon: '📈', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { title: 'Approve Clearance', description: 'Review clearance requests', icon: '✅', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { title: 'Schedule Inspection', description: 'Plan zonal inspection tour', icon: '🗓️', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' }
  ]);

  const handleQuickAction = (action) => {
    alert(`Initiating: ${action.title}`);
  };

  const generateReport = () => {
    alert('Generating Zonal Quarterly Report...');
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Upcoming Zonal Events</h4>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} transition-colors duration-300`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Quarterly Zonal Meeting</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Friday, March 25, 2024</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">All State Coordinators & LGIs | Ibadan, Oyo State</div>
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
                    {activity.state && <span className="text-blue-600 dark:text-blue-400">{activity.state}</span>}
                    {activity.lgi && <span className="text-green-600 dark:text-green-400">{activity.lgi}</span>}
                    {activity.clearance && <span className="text-purple-600 dark:text-purple-400">Clearance</span>}
                    {activity.system && <span className="text-gray-600 dark:text-gray-400">System</span>} {activity.description}
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
            <h3 className="text-xl font-bold mb-2">Welcome, {zonalData?.fullName}!</h3>
            <p className="opacity-90">
              You are the Zonal Inspector for <span className="font-bold">{zonalData?.zone}</span>.
            </p>
            <p className="opacity-90 mt-2">
              Jurisdiction: <span className="font-bold">{zonalData?.jurisdiction || zonalData?.zone}</span>
            </p>
            <p className="opacity-90 mt-1">
              States: <span className="font-bold">{zonalData?.states?.join(', ') || 'All assigned states'}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button 
              onClick={generateReport}
              className="bg-white text-[#008753] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-sm"
            >
              Generate Quarterly Report
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 font-medium text-sm">
              View All States
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">6</div>
            <div className="text-sm opacity-90">States</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">4,872</div>
            <div className="text-sm opacity-90">Total Corpers</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">4.7</div>
            <div className="text-sm opacity-90">Zone Rating</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">96%</div>
            <div className="text-sm opacity-90">Compliance Rate</div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">State Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(zonalData?.states || ['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti']).slice(0, 6).map((state, index) => (
            <div key={state} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'}`}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{state} State</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Active Corpers</span>
                  <span className="font-bold text-gray-900 dark:text-white">{[812, 654, 798, 602, 735, 681][index]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>LGIs</span>
                  <span className="font-bold text-gray-900 dark:text-white">{[8, 6, 9, 5, 7, 6][index]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Performance</span>
                  <span className={`font-bold ${
                    [4.8, 4.5, 4.7, 4.3, 4.6, 4.4][index] >= 4.5 ? 'text-green-600 dark:text-green-400' :
                    [4.8, 4.5, 4.7, 4.3, 4.6, 4.4][index] >= 4.0 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {[4.8, 4.5, 4.7, 4.3, 4.6, 4.4][index]}/5.0
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Compliance</span>
                  <span className={`font-bold ${
                    [98, 95, 97, 92, 96, 94][index] >= 95 ? 'text-green-600 dark:text-green-400' :
                    [98, 95, 97, 92, 96, 94][index] >= 90 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {[98, 95, 97, 92, 96, 94][index]}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}