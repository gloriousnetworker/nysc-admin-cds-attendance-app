'use client';
import { useState } from 'react';

export default function CorpersManagement({ darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');

  const corpers = [
    { id: 1, name: 'John Doe', stateCode: 'NYSC/ABJ/2024/001', cdsGroup: 'Education', state: 'Lagos', ppa: 'Tech Solutions Ltd', status: 'active' },
    { id: 2, name: 'Sarah Johnson', stateCode: 'NYSC/ABJ/2024/002', cdsGroup: 'Health & Medical', state: 'Abuja', ppa: 'General Hospital', status: 'active' },
    { id: 3, name: 'Michael Brown', stateCode: 'NYSC/ABJ/2024/003', cdsGroup: 'ICT & Digital', state: 'Oyo', ppa: 'Digital Hub', status: 'pending' },
    { id: 4, name: 'Emily Davis', stateCode: 'NYSC/ABJ/2024/004', cdsGroup: 'Sports', state: 'Rivers', ppa: 'Sports Academy', status: 'active' },
    { id: 5, name: 'Robert Wilson', stateCode: 'NYSC/ABJ/2024/005', cdsGroup: 'Agriculture', state: 'Kano', ppa: 'Farm Solutions', status: 'active' },
    { id: 6, name: 'Lisa Anderson', stateCode: 'NYSC/ABJ/2024/006', cdsGroup: 'Legal Aid', state: 'Delta', ppa: 'Law Chambers', status: 'inactive' },
    { id: 7, name: 'David Miller', stateCode: 'NYSC/ABJ/2024/007', cdsGroup: 'Environment', state: 'Kaduna', ppa: 'Green Earth', status: 'active' },
    { id: 8, name: 'Jennifer Lee', stateCode: 'NYSC/ABJ/2024/008', cdsGroup: 'Skill Acquisition', state: 'Enugu', ppa: 'Tech Academy', status: 'active' }
  ];

  const states = ['all', 'Lagos', 'Abuja', 'Oyo', 'Rivers', 'Kano', 'Delta', 'Kaduna', 'Enugu'];

  const filteredCorpers = corpers.filter(corper => {
    const matchesSearch = corper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         corper.stateCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = filterState === 'all' || corper.state === filterState;
    return matchesSearch && matchesState;
  });

  const handleAddCorper = () => {
    alert('Add new corper form will open');
  };

  const handleViewCorper = (corper) => {
    alert(`View details for: ${corper.name}`);
  };

  const handleEditCorper = (corper) => {
    alert(`Edit corper: ${corper.name}`);
  };

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Corpers Management</h3>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or state code..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753]"
            />
            
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753]"
            >
              {states.map(state => (
                <option key={state} value={state} className="dark:bg-gray-800">
                  {state === 'all' ? 'All States' : state}
                </option>
              ))}
            </select>
            
            <button
              onClick={handleAddCorper}
              className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition font-medium"
            >
              + Add Corper
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">Corper Details</th>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">State Code</th>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">CDS Group</th>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">State</th>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">PPA</th>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">Status</th>
              <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCorpers.map(corper => (
              <tr key={corper.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {corper.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white text-sm">{corper.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">ID: {corper.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-mono text-sm text-gray-800 dark:text-gray-300">{corper.stateCode}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                    {corper.cdsGroup}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-800 dark:text-gray-300">{corper.state}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-800 dark:text-gray-300 truncate max-w-[150px]">{corper.ppa}</div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    corper.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                    corper.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}>
                    {corper.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewCorper(corper)}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 text-xs"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEditCorper(corper)}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 text-xs"
                    >
                      Edit
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
            Showing {filteredCorpers.length} of {corpers.length} corpers
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#008753] text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Quick Stats</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-[#008753] dark:text-green-400">1,247</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Corpers</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">1,142</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Active Corpers</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">105</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Pending</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">85%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Attendance Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}