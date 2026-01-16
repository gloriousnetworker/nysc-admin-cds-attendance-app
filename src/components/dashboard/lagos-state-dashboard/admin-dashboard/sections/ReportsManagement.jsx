'use client';
import { useState } from 'react';

export default function AdminUsersSection({ adminData, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'John Doe', stateCode: 'NYSC/ABJ/2024/001', role: 'Corper', cdsGroup: 'Education', state: 'Lagos', status: 'active', lastActive: 'Today' },
    { id: 2, name: 'Sarah Johnson', stateCode: 'NYSC/ABJ/2024/002', role: 'CDS Coordinator', cdsGroup: 'Health & Medical', state: 'Abuja', status: 'active', lastActive: '2 hours ago' },
    { id: 3, name: 'Michael Brown', stateCode: 'NYSC/ABJ/2024/003', role: 'PPA Owner', cdsGroup: '-', state: 'Oyo', status: 'pending', lastActive: 'Yesterday' },
    { id: 4, name: 'Emily Davis', stateCode: 'NYSC/ABJ/2024/004', role: 'Corper', cdsGroup: 'ICT & Digital', state: 'Rivers', status: 'active', lastActive: 'Today' },
    { id: 5, name: 'Robert Wilson', stateCode: 'NYSC/ABJ/2024/005', role: 'Local Govt Inspector', cdsGroup: '-', state: 'Kano', status: 'active', lastActive: '3 hours ago' },
    { id: 6, name: 'Lisa Anderson', stateCode: 'NYSC/ABJ/2024/006', role: 'Zonal Inspector', cdsGroup: '-', state: 'South-West', status: 'inactive', lastActive: '1 week ago' },
    { id: 7, name: 'David Miller', stateCode: 'NYSC/ABJ/2024/007', role: 'Corper', cdsGroup: 'Agriculture', state: 'Kaduna', status: 'active', lastActive: 'Today' },
    { id: 8, name: 'Jennifer Lee', stateCode: 'NYSC/ABJ/2024/008', role: 'CDS Coordinator', cdsGroup: 'Sports', state: 'Delta', status: 'active', lastActive: '4 hours ago' }
  ];

  const roles = ['all', 'Corper', 'CDS Coordinator', 'PPA Owner', 'Local Govt Inspector', 'Zonal Inspector'];

  const handleViewUser = (user) => {
    setSelectedUser(user);
  };

  const handleEditUser = (user) => {
    alert(`Edit user: ${user.name}`);
  };

  const handleDeleteUser = (user) => {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      alert(`User ${user.name} deleted successfully`);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.stateCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-8">
      <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">User Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Users
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#008753] dark:text-white"
              placeholder="Search by name or state code..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Role
            </label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#008753] dark:text-white"
            >
              {roles.map(role => (
                <option key={role} value={role} className="dark:bg-gray-800">
                  {role === 'all' ? 'All Roles' : role}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-[#008753] text-white py-2 px-4 rounded-lg hover:bg-[#006b42] transition font-medium">
              + Add New User
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full">
            <thead className={darkMode ? 'bg-gray-800' : 'bg-gray-50'}>
              <tr>
                <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-400 font-semibold">User Details</th>
                <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-400 font-semibold">Role</th>
                <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-400 font-semibold">CDS Group</th>
                <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-400 font-semibold">State</th>
                <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-400 font-semibold">Status</th>
                <th className="py-3 px-4 text-left text-gray-600 dark:text-gray-400 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map(user => (
                <tr key={user.id} className={darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#008753] rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">{user.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{user.stateCode}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.role === 'Corper' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                      user.role.includes('Coordinator') ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                      user.role.includes('Inspector') ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-800 dark:text-white">{user.cdsGroup}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm">
                      {user.state}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                      user.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                      'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewUser(user)}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800/50 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-600 dark:text-gray-400">
            Showing {filteredUsers.length} of {users.length} users
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006b42]">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedUser && (
        <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">User Details</h3>
            <button
              onClick={() => setSelectedUser(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Full Name</label>
                <div className="font-medium text-gray-800 dark:text-white">{selectedUser.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">State Code</label>
                <div className="font-medium text-gray-800 dark:text-white">{selectedUser.stateCode}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Role</label>
                <div className="font-medium text-gray-800 dark:text-white">{selectedUser.role}</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">CDS Group</label>
                <div className="font-medium text-gray-800 dark:text-white">{selectedUser.cdsGroup}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">State</label>
                <div className="font-medium text-gray-800 dark:text-white">{selectedUser.state}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Last Active</label>
                <div className="font-medium text-gray-800 dark:text-white">{selectedUser.lastActive}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-[#008753] text-white rounded-lg hover:bg-[#006b42] font-medium">
                Reset Password
              </button>
              <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium">
                Send Message
              </button>
              <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium">
                View Activity Log
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}