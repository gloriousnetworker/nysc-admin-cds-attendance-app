'use client';
import { useState } from 'react';

export default function CDSDashboardSidebar({ activeSection, setActiveSection, darkMode }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: '📊', color: 'bg-blue-500' },
    { id: 'members', label: 'Group Members', icon: '👥', color: 'bg-green-500' },
    { id: 'attendance', label: 'Attendance', icon: '📝', color: 'bg-purple-500' },
    { id: 'activities', label: 'Activities', icon: '🏃', color: 'bg-yellow-500' },
    { id: 'dues', label: 'CDS Dues', icon: '💰', color: 'bg-indigo-500' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'bg-pink-500' },
    { id: 'reports', label: 'Reports', icon: '📈', color: 'bg-teal-500' },
    { id: 'profile', label: 'My Profile', icon: '👤', color: 'bg-orange-500' },
    { id: 'settings', label: 'Settings', icon: '⚙️', color: 'bg-gray-500' }
  ];

  return (
    <aside className={`hidden md:block ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 h-[calc(100vh-4rem)] sticky top-16 dark-mode-transition`}>
      <div className={`p-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-full flex items-center justify-center p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="p-3">
        <ul className="space-y-1">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#008753] text-white'
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                <span className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center text-white`}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className={`font-medium ml-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.label}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {!collapsed && (
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} mt-4`}>
          <div className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>GROUP STATS</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Total Members</span>
              <span className="font-bold text-[#008753] dark:text-green-400">48</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Today Present</span>
              <span className="font-bold text-green-600 dark:text-green-400">42</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Attendance Rate</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">88%</span>
            </div>
            <button className="w-full mt-3 bg-[#008753] text-white py-2 px-4 rounded-lg hover:bg-[#006b42] transition-colors duration-300 font-medium text-sm">
              Mark Attendance
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}