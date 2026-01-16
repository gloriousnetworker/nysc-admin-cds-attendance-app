'use client';
import { useState } from 'react';

export default function LGIOverview({ lgiData, darkMode }) {
  const [stats] = useState([
    { label: 'Total Corpers', value: '248', change: '+12', icon: '🎓', color: 'bg-blue-500' },
    { label: 'Active PPAs', value: '56', change: '+3', icon: '🏢', color: 'bg-green-500' },
    { label: 'CDS Groups', value: '12', change: '+1', icon: '👥', color: 'bg-purple-500' },
    { label: 'Attendance Rate', value: '82%', change: '+3%', icon: '📊', color: 'bg-yellow-500' },
    { label: 'Pending Verifications', value: '8', change: '-2', icon: '✅', color: 'bg-indigo-500' },
    { label: 'Active Complaints', value: '5', change: '+1', icon: '⚠️', color: 'bg-pink-500' }
  ]);

  const [recentActivities] = useState([
    { type: 'verification', description: 'Tech Solutions Ltd PPA verified', time: '2 hours ago', status: 'completed' },
    { type: 'corper', description: 'New corper registered: John Doe', time: '4 hours ago', status: 'completed' },
    { type: 'complaint', description: 'PPA complaint from Sarah Johnson', time: '1 day ago', status: 'pending' },
    { type: 'attendance', description: 'Monthly attendance report generated', time: '2 days ago', status: 'completed' },
    { type: 'cds', description: 'Education CDS meeting attended', time: '3 days ago', status: 'completed' }
  ]);

  const [quickActions] = useState([
    { title: 'Verify PPA', description: 'Approve new organization', icon: '🏢', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { title: 'Monitor Attendance', description: 'Check corper attendance', icon: '📝', color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { title: 'Generate Report', description: 'Create LGA report', icon: '📈', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    { title: 'Handle Complaint', description: 'Resolve complaints', icon: '⚠️', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' }
  ]);

  const handleQuickAction = (action) => {
    alert(`Initiating: ${action.title}`);
  };

  const generateReport = () => {
    alert('Generating Local Government Area report...');
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Upcoming Inspections</h4>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} transition-colors duration-300`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Monthly PPA Inspection Tour</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Friday, March 18, 2024</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Covering 12 PPAs in Ikeja Area</div>
                  </div>
                  <button className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition-colors duration-300 text-sm font-medium">
                    View Schedule
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
                    {activity.description}
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
            <h3 className="text-xl font-bold mb-2">Welcome, {lgiData?.fullName}!</h3>
            <p className="opacity-90">
              You are the Local Government Inspector for <span className="font-bold">{lgiData?.localGovernment}</span>, {lgiData?.state}.
            </p>
            <p className="opacity-90 mt-2">
              Jurisdiction: <span className="font-bold">{lgiData?.jurisdiction || lgiData?.localGovernment + ' Local Government Area'}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button 
              onClick={generateReport}
              className="bg-white text-[#008753] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-sm"
            >
              Generate Monthly Report
            </button>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 font-medium text-sm">
              View All Corpers
            </button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">248</div>
            <div className="text-sm opacity-90">Total Corpers</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">56</div>
            <div className="text-sm opacity-90">Verified PPAs</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">82%</div>
            <div className="text-sm opacity-90">Avg. Attendance</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-lg font-bold">94%</div>
            <div className="text-sm opacity-90">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Jurisdiction Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CDS Groups Distribution</h4>
            <div className="space-y-2">
              {[
                { group: 'Education', count: 24 },
                { group: 'Health', count: 18 },
                { group: 'ICT', count: 16 },
                { group: 'Agriculture', count: 12 }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.group}</span>
                  <span className="font-bold text-gray-900 dark:text-white">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Attendance by Sector</h4>
            <div className="space-y-2">
              {[
                { sector: 'Education', rate: '88%' },
                { sector: 'Health', rate: '85%' },
                { sector: 'Private', rate: '79%' },
                { sector: 'Government', rate: '92%' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.sector}</span>
                  <span className={`font-bold ${
                    parseInt(item.rate) >= 85 ? 'text-green-600 dark:text-green-400' :
                    parseInt(item.rate) >= 75 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                  }`}>{item.rate}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Verification Status</h4>
            <div className="space-y-2">
              {[
                { status: 'Verified', count: 56 },
                { status: 'Pending', count: 8 },
                { status: 'Rejected', count: 3 },
                { status: 'Expired', count: 2 }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.status}</span>
                  <span className="font-bold text-gray-900 dark:text-white">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}