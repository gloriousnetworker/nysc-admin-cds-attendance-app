'use client';
import { useState } from 'react';

export default function PPACorpers({ ppaData, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [selectedCorper, setSelectedCorper] = useState(null);

  const corpers = [
    { id: 1, name: 'John Doe', stateCode: 'NYSC/ABJ/2024/001', department: 'Software Development', supervisor: 'Mr. Johnson', performance: '4.9', status: 'active', joinDate: 'Jan 15, 2024' },
    { id: 2, name: 'Sarah Smith', stateCode: 'NYSC/ABJ/2024/002', department: 'Quality Assurance', supervisor: 'Mrs. Adeola', performance: '4.8', status: 'active', joinDate: 'Jan 15, 2024' },
    { id: 3, name: 'Michael Brown', stateCode: 'NYSC/ABJ/2024/003', department: 'DevOps', supervisor: 'Mr. Chinedu', performance: '4.7', status: 'active', joinDate: 'Feb 1, 2024' },
    { id: 4, name: 'Emily Davis', stateCode: 'NYSC/ABJ/2024/004', department: 'UI/UX Design', supervisor: 'Ms. Fatima', performance: '4.6', status: 'active', joinDate: 'Feb 1, 2024' },
    { id: 5, name: 'Robert Wilson', stateCode: 'NYSC/ABJ/2024/005', department: 'Marketing', supervisor: 'Mr. Segun', performance: '4.5', status: 'warning', joinDate: 'Mar 1, 2024' },
    { id: 6, name: 'Lisa Anderson', stateCode: 'NYSC/ABJ/2024/006', department: 'Human Resources', supervisor: 'Mrs. Bola', performance: '4.2', status: 'active', joinDate: 'Mar 1, 2024' },
    { id: 7, name: 'David Miller', stateCode: 'NYSC/ABJ/2024/007', department: 'Software Development', supervisor: 'Mr. Johnson', performance: '4.9', status: 'active', joinDate: 'Jan 15, 2024' },
    { id: 8, name: 'Jennifer Lee', stateCode: 'NYSC/ABJ/2024/008', department: 'Data Analysis', supervisor: 'Mr. Ahmed', performance: '4.8', status: 'active', joinDate: 'Feb 1, 2024' }
  ];

  const departments = ['all', 'Software Development', 'Quality Assurance', 'DevOps', 'UI/UX Design', 'Marketing', 'Human Resources', 'Data Analysis'];

  const filteredCorpers = corpers.filter(corper => {
    const matchesSearch = corper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         corper.stateCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = filterDepartment === 'all' || corper.department === filterDepartment;
    return matchesSearch && matchesDept;
  });

  const handleAssignTask = (corper) => {
    alert(`Assign task to: ${corper.name}`);
  };

  const handleViewDetails = (corper) => {
    setSelectedCorper(corper);
  };

  const handleEvaluate = (corper) => {
    alert(`Evaluate: ${corper.name}`);
  };

  return (
    <div className={`rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">My Corpers</h3>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search corpers..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            />
            
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#008753] transition-colors duration-300"
            >
              {departments.map(dept => (
                <option key={dept} value={dept} className="dark:bg-gray-800">
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
            
            <button
              className="bg-[#008753] text-white px-4 py-2 rounded-lg hover:bg-[#006b42] transition-colors duration-300 font-medium"
            >
              + Request New Corper
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
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Department</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Supervisor</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Performance</th>
              <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold text-sm">Status</th>
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
                      <div className="text-xs text-gray-600 dark:text-gray-400">Joined: {corper.joinDate}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-300">{corper.stateCode}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                    {corper.department}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-900 dark:text-gray-300">{corper.supervisor}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {'★'.repeat(Math.floor(corper.performance))}
                      {'☆'.repeat(5 - Math.floor(corper.performance))}
                    </div>
                    <span className="text-xs font-medium text-gray-900 dark:text-gray-300 ml-1">
                      {corper.performance}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    corper.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                    corper.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}>
                    {corper.status}
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
                    <button
                      onClick={() => handleAssignTask(corper)}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 text-xs transition-colors duration-300"
                    >
                      Assign Task
                    </button>
                    <button
                      onClick={() => handleEvaluate(corper)}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/50 text-xs transition-colors duration-300"
                    >
                      Evaluate
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
            Showing {filteredCorpers.length} of {corpers.length} corpers in {ppaData?.organization}
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
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Department</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.department}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Supervisor</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.supervisor}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Performance</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.performance}/5.0</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Join Date</label>
                <div className="font-medium text-gray-900 dark:text-white">{selectedCorper.joinDate}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006b42] transition-colors duration-300 text-sm font-medium">
                View Full Profile
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                View Attendance
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors duration-300">
                Performance Report
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`p-5 border-t border-gray-200 dark:border-gray-700 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Organization Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-[#008753] dark:text-green-400">8</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Corpers</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">4.8</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Performance</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">7</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Departments</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-800">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">87%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Attendance</div>
          </div>
        </div>
      </div>
    </div>
  );
}