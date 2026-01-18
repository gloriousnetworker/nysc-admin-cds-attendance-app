'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function CDSDashboardNavbar({ cdsData, onLogout, activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navSections = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'members', label: 'Group Members', icon: '👥' },
    { id: 'attendance', label: 'Attendance', icon: '📝' },
    { id: 'activities', label: 'Activities', icon: '🏃' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#006600] to-[#008800] rounded-full flex items-center justify-center overflow-hidden mr-3">
                <Image 
                  src="/images/nysc-logo.png" 
                  alt="NYSC Logo" 
                  width={40} 
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-[#006600] dark:text-green-500">Kogi CDS Coordinator</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{cdsData?.cdsGroup} Group • Confluence State</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition text-sm ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-[#006600] to-[#008800] text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-[#FF9900] to-[#FFAA33] rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-white">Kogi CDS</span>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right">
                <div className="font-semibold text-gray-800 dark:text-white text-sm">{cdsData?.fullName}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">{cdsData?.cdsGroup} Coordinator</div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-[#006600] to-[#008800] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {cdsData?.fullName?.charAt(0) || 'C'}
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="bg-gradient-to-r from-[#FF9900] to-[#FFAA33] text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-colors duration-300 text-sm font-medium"
            >
              Logout
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-[#006600] dark:hover:text-green-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-[#FF9900] to-[#FFAA33] rounded-lg">
                <span className="text-sm font-medium text-white">Kogi CDS</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {navSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-lg font-medium text-center transition text-sm ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-[#006600] to-[#008800] text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="text-lg mb-1">{section.icon}</div>
                  {section.label}
                </button>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#006600] to-[#008800] rounded-full flex items-center justify-center text-white font-bold">
                    {cdsData?.fullName?.charAt(0) || 'C'}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white text-sm">{cdsData?.fullName}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{cdsData?.cdsGroup} Coordinator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}