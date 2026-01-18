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
    overview: 'Lagos PPA Dashboard Overview',
    corpers: 'Lagos My Corpers',
    attendance: 'Lagos Attendance Management',
    schedule: 'Lagos Work Schedule',
    evaluation: 'Lagos Performance Evaluations',
    reports: 'Lagos Reports & Analytics',
    profile: 'Lagos Organization Profile',
    settings: 'Lagos PPA Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Lagos ${ppaData?.organization} PPA Dashboard • Centre of Excellence`,
    corpers: 'Manage Lagos corpers assigned to your organization',
    attendance: 'Track and manage daily Lagos attendance',
    schedule: 'View and manage Lagos work schedules',
    evaluation: 'Evaluate Lagos corper performance',
    reports: 'Generate Lagos organization reports',
    profile: 'Manage Lagos organization information',
    settings: 'Configure Lagos PPA settings'
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#004080] rounded-lg flex items-center justify-center text-white font-bold">
            LA
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {sectionTitles[activeSection] || 'Dashboard'}
          </h1>
        </div>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your Lagos PPA'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}