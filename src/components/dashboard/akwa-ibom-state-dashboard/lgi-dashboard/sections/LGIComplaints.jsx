'use client';
import { useState } from 'react';

export default function LGICorpers({ lgiData, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSector, setFilterSector] = useState('all');
  const [selectedCorper, setSelectedCorper] = useState(null);

  const corpers = [
    { id: 1, name: 'John Doe', stateCode: 'NYSC/ABJ/2024/001', ppa: 'Tech Solutions Ltd', sector: 'Private', attendance: '95%', status: 'active', lgiVerified: true },
    { id: 2, name: 'Sarah Smith', stateCode: 'NYSC/ABJ/2024/002', ppa: 'General Hospital', sector: 'Health', attendance: '88%', status: 'active', lgiVerified: true },
    { id: 3, name: 'Michael Brown', stateCode: 'NYSC/ABJ/2024/003', ppa: 'Digital Hub', sector: 'Private', attendance: '75%', status: 'active', lgiVerified: true },
    { id: 4, name: 'Emily Davis', stateCode: 'NYSC/ABJ/2024/004', ppa: 'Ikeja High School', sector: 'Education', attendance: '92%', status: 'active', lgiVerified: true },
    { id: 5, name: 'Robert Wilson', stateCode: 'NYSC/ABJ/2024/005', ppa: 'Farm Solutions', sector: 'Agriculture', attendance: '60%', status: 'warning', lgiVerified: true },
    { id: 6, name: 'Lisa Anderson', stateCode: 'NYSC/ABJ/2024/006', ppa: 'Law Chambers', sector: 'Private', attendance: '45%', status: 'inactive', lgiVerified: false },
    { id: 7, name: 'David Miller', stateCode: 'NYSC/ABJ/2024/007', ppa: 'Local Govt. Office', sector: 'Government', attendance: '100%', status: 'active', lgiVerified: true },
    { id: 8, name: 'Jennifer Lee', stateCode: 'NYSC/ABJ/2024/008', ppa: 'Tech Academy', sector: 'Education', attendance: '85%', status: 'active', lgiVerified: true }
  ];

  const sectors = ['all', 'Education', 'Health', 'Private', 'Government', 'Agriculture'];

  const filteredCorpers = corpers.filter(corper => {
    const matchesSearch = corper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         corper.stateCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = filterSector === 'all' || corper.sector === filterSector;
    return matchesSearch && matchesSector;
  });

  const handleVerifyCorper = (corper) => {
    alert(`Verify corper: ${corper.name}`);
  };

  const handleViewDetails = (corper) => {
    setSelectedCorper(corper);
  };

  const handleGenerateClearance = (corper) => {
    alert(`Generate clearance for: ${corper.name}`);
  };

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Corpers Management</h3>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search corpers..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            />
            
            <select
              value={filterSector}
              onChange={(e) => setFilterSector(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector} className="dark:bg-gray-800">
                  {sector === 'all' ? 'All Sectors' : sector}
                </option>
              ))}
            </select>
            
            <button
              className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition-colors duration-300 font-medium"
            >
              Export List
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Corper Details</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">State Code</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">PPA</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Sector</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Attendance</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">LGI Verified</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCorpers.map(corper => (
              <tr key={corper.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} style={{transition: 'background-color 0.3s ease'}}>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {corper.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{corper.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">ID: {corper.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-300">{corper.stateCode}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-900 dark:text-gray-300 truncate max-w-[120px]">{corper.ppa}</div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                    {corper.sector}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className={`w-16 h-2 rounded-full mr-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-2 rounded-full ${
                          parseInt(corper.attendance) >= 80 ? 'bg-green-500' :
                          parseInt(corper.attendance) >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: corper.attendance }}
                      ></div>
                    </div>
                    <span className={`text-xs font-medium ${
                      parseInt(corper.attendance) >= 80 ? 'text-green-600 dark:text-green-400' :
                      parseInt(corper.attendance) >= 60 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {corper.attendance}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    corper.lgiVerified ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}>
                    {corper.lgiVerified ? 'Verified' : 'Not Verified'}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(corper)}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 text-xs transition-colors duration-300"
                    >
                      View
                    </button>
                    {!corper.lgiVerified && (
                      <button
                        onClick={() => handleVerifyCorper(corper)}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 text-xs transition-colors duration-300"
                      >
                        Verify
                      </button>
                    )}
                    <button
                      onClick={() => handleGenerateClearance(corper)}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/50 text-xs transition-colors duration-300"
                    >
                      Clearance
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
            Showing {filteredCorpers.length} of {corpers.length} corpers in {lgiData?.localGovernment}
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

      {selectedCorper && (
        <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Corper Details</h4>
            <button
              onClick={() => setSelectedCorper(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Full Name</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">State Code</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.stateCode}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">PPA</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.ppa}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Sector</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.sector}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Attendance</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.attendance}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Verification Status</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.lgiVerified ? 'Verified' : 'Pending Verification'}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006b42] transition-colors duration-300 text-sm font-medium">
                View Full Profile
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                Check Attendance
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Local Government Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-[#008753] dark:text-green-400">248</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Corpers</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">82%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Attendance</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">231</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Verified Corpers</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">17</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Need Attention</div>
          </div>
        </div>
      </div>
    </div>
  );
}