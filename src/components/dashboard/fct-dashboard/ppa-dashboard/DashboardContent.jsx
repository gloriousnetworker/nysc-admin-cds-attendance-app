'use client';
import { useState } from 'react';
import PPAOverview from './sections/PPAOverview';
import PPACorpers from './sections/PPACorpers';
import PPAAttendance from './sections/PPAAttendance';
import PPAWorkSchedule from './sections/PPAWorkSchedule';
import PPAEvaluations from './sections/PPAEvaluations';
import PPAReports from './sections/PPAReports';
import PPAProfile from './sections/PPAProfile';
import PPASettings from './sections/PPASettings';

export default function DashboardContent({ activeSection, ppaData, onUpdateProfile, darkMode, toggleDarkMode }) {
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <PPAOverview ppaData={ppaData} darkMode={darkMode} />;
      case 'corpers':
        return <PPACorpers ppaData={ppaData} darkMode={darkMode} />;
      case 'attendance':
        return <PPAAttendance ppaData={ppaData} darkMode={darkMode} />;
      case 'schedule':
        return <PPAWorkSchedule ppaData={ppaData} darkMode={darkMode} />;
      case 'evaluation':
        return <PPAEvaluations ppaData={ppaData} darkMode={darkMode} />;
      case 'reports':
        return <PPAReports ppaData={ppaData} darkMode={darkMode} />;
      case 'profile':
        return <PPAProfile ppaData={ppaData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} />;
      case 'settings':
        return <PPASettings ppaData={ppaData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <PPAOverview ppaData={ppaData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'FCT PPA Dashboard Overview',
    corpers: 'My FCT Corpers',
    attendance: 'FCT Attendance Management',
    schedule: 'FCT Work Schedule',
    evaluation: 'FCT Performance Evaluations',
    reports: 'FCT Reports & Analytics',
    profile: 'FCT Organization Profile',
    settings: 'FCT PPA Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to FCT ${ppaData?.organization} PPA Dashboard`,
    corpers: 'Manage FCT corpers assigned to your organization',
    attendance: 'Track and manage daily FCT attendance',
    schedule: 'View and manage FCT work schedules',
    evaluation: 'Evaluate FCT corper performance',
    reports: 'Generate FCT organization reports',
    profile: 'Manage FCT organization information',
    settings: 'Configure FCT PPA settings'
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#008753] to-[#00a86b] rounded-lg flex items-center justify-center text-white font-bold">
            FCT
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {sectionTitles[activeSection] || 'Dashboard'}
          </h1>
        </div>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your FCT PPA'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}