'use client';
import { useState } from 'react';

export default function ZonalLGIs({ zonalData, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');
  const [selectedLGI, setSelectedLGI] = useState(null);

  const lgis = [
    { id: 1, name: 'Mr. Adebayo', state: 'Lagos', localGovernment: 'Ikeja', performance: '4.8', corpers: 248, ppas: 56, status: 'active' },
    { id: 2, name: 'Mrs. Chinedu', state: 'Ogun', localGovernment: 'Abeokuta South', performance: '4.6', corpers: 196, ppas: 42, status: 'active' },
    { id: 3, name: 'Dr. Fatima', state: 'Oyo', localGovernment: 'Ibadan North', performance: '4.7', corpers: 278, ppas: 65, status: 'active' },
    { id: 4, name: 'Mr. Segun', state: 'Osun', localGovernment: 'Osogbo', performance: '4.3', corpers: 182, ppas: 38, status: 'warning' },
    { id: 5, name: 'Ms. Bola', state: 'Ondo', localGovernment: 'Akure South', performance: '4.5', corpers: 235, ppas: 52, status: 'active' },
    { id: 6, name: 'Mr. Ahmed', state: 'Ekiti', localGovernment: 'Ado-Ekiti', performance: '4.2', corpers: 198, ppas: 41, status: 'active' },
    { id: 7, name: 'Mrs. Johnson', state: 'Lagos', localGovernment: 'Surulere', performance: '4.9', corpers: 312, ppas: 68, status: 'active' },
    { id: 8, name: 'Mr. Musa', state: 'Ogun', localGovernment: 'Sagamu', performance: '4.4', corpers: 167, ppas: 35, status: 'active' }
  ];

  const states = ['all', ...(zonalData?.states || ['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti'])];

  const filteredLGIs = lgis.filter(lgi => {
    const matchesSearch = lgi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lgi.localGovernment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = filterState === 'all' || lgi.state === filterState;
    return matchesSearch && matchesState;
  });

  const handleReviewLGI = (lgi) => {
    alert(`Review LGI: ${lgi.name}`);
  };

  const handleViewDetails = (lgi) => {
    setSelectedLGI(lgi);
  };

  const handleGenerateReport = (lgi) => {
    alert(`Generate report for: ${lgi.name}`);
  };

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Local Government Inspectors</h3>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search LGIs..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            />
            
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            >
              {states.map(state => (
                <option key={state} value={state} className="dark:bg-gray-800">
                  {state === 'all' ? 'All States' : state}
                </option>
              ))}
            </select>
            
            <button
              className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition-colors duration-300 font-medium"
            >
              + Add New LGI
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">LGI Details</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">State</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Local Government</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Performance</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Corpers</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">PPAs</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredLGIs.map(lgi => (
              <tr key={lgi.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} style={{transition: 'background-color 0.3s ease'}}>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {lgi.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{lgi.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">ID: ZI-{lgi.id.toString().padStart(3, '0')}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                    {lgi.state}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-900 dark:text-gray-300">{lgi.localGovernment}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {'★'.repeat(Math.floor(lgi.performance))}
                      {'☆'.repeat(5 - Math.floor(lgi.performance))}
                    </div>
                    <span className={`text-xs font-medium ml-1 ${
                      lgi.performance >= 4.5 ? 'text-green-600 dark:text-green-400' :
                      lgi.performance >= 4.0 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {lgi.performance}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-900 dark:text-gray-300">{lgi.corpers.toLocaleString()}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-900 dark:text-gray-300">{lgi.ppas}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(lgi)}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 text-xs transition-colors duration-300"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleReviewLGI(lgi)}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 text-xs transition-colors duration-300"
                    >
                      Review
                    </button>
                    <button
                      onClick={() => handleGenerateReport(lgi)}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/50 text-xs transition-colors duration-300"
                    >
                      Report
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
            Showing {filteredLGIs.length} of {lgis.length} LGIs in {zonalData?.zone}
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

      {selectedLGI && (
        <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">LGI Details</h4>
            <button
              onClick={() => setSelectedLGI(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Full Name</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedLGI.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">State</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedLGI.state}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Local Government</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedLGI.localGovernment}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Performance</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedLGI.performance}/5.0</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Corpers Under Jurisdiction</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedLGI.corpers.toLocaleString()}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">PPAs Managed</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedLGI.ppas}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006b42] transition-colors duration-300 text-sm font-medium">
                View Full Profile
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                Performance Report
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                Generate LGA Report
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Zonal Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-[#008753] dark:text-green-400">48</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total LGIs</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">4.7</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Performance</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">4,872</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Corpers</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">6</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">States</div>
          </div>
        </div>
      </div>
    </div>
  );
}