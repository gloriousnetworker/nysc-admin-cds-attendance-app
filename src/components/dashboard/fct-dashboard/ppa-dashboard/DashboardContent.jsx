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

export default function DashboardContent({ activeSection, ppaData, onUpdateProfile, darkMode }) {
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
        return <PPASettings ppaData={ppaData} darkMode={darkMode} />;
      default:
        return <PPAOverview ppaData={ppaData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'PPA Dashboard Overview',
    corpers: 'My Corpers',
    attendance: 'Attendance Management',
    schedule: 'Work Schedule',
    evaluation: 'Performance Evaluations',
    reports: 'Reports & Analytics',
    profile: 'Organization Profile',
    settings: 'Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to ${ppaData?.organization} PPA Dashboard`,
    corpers: 'Manage corpers assigned to your organization',
    attendance: 'Track and manage daily attendance',
    schedule: 'View and manage work schedules',
    evaluation: 'Evaluate corper performance',
    reports: 'Generate organization reports',
    profile: 'Manage organization information',
    settings: 'Configure PPA settings'
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {sectionTitles[activeSection] || 'Dashboard'}
        </h1>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your PPA'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}