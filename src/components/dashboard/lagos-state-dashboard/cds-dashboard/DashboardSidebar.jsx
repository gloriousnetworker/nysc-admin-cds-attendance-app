'use client';
import { useState } from 'react';

export default function CDSDashboardSidebar({ activeSection, setActiveSection, darkMode }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: '📊', color: 'bg-gradient-to-r from-blue-600 to-blue-400' },
    { id: 'members', label: 'Group Members', icon: '👥', color: 'bg-gradient-to-r from-green-600 to-green-400' },
    { id: 'attendance', label: 'Attendance', icon: '📝', color: 'bg-gradient-to-r from-purple-600 to-purple-400' },
    { id: 'activities', label: 'Activities', icon: '🏃', color: 'bg-gradient-to-r from-yellow-600 to-yellow-400' },
    { id: 'dues', label: 'CDS Dues', icon: '💰', color: 'bg-gradient-to-r from-indigo-600 to-indigo-400' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'bg-gradient-to-r from-pink-600 to-pink-400' },
    { id: 'reports', label: 'Reports', icon: '📈', color: 'bg-gradient-to-r from-teal-600 to-teal-400' },
    { id: 'profile', label: 'My Profile', icon: '👤', color: 'bg-gradient-to-r from-orange-600 to-orange-400' },
    { id: 'settings', label: 'Settings', icon: '⚙️', color: 'bg-gradient-to-r from-gray-600 to-gray-400' }
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
                    ? 'bg-gradient-to-r from-[#003366] to-[#004080] text-white'
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
          <div className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>LAGOS CDS STATS</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Lagos Members</span>
              <span className="font-bold text-[#003366] dark:text-blue-400">48</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Today Present</span>
              <span className="font-bold text-green-600 dark:text-green-400">42</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Lagos Att. Rate</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">88%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Active in Ikeja</span>
              <span className="font-bold text-[#E5A823] dark:text-yellow-400">48</span>
            </div>
            <button className="w-full mt-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white py-2 px-4 rounded-lg hover:opacity-90 transition-colors duration-300 font-medium text-sm">
              Mark Lagos Attendance
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}