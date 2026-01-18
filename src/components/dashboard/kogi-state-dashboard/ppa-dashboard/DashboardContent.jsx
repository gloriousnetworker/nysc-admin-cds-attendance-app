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
        return <PPASettings ppaData={ppaData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <PPAOverview ppaData={ppaData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Kogi PPA Dashboard Overview',
    corpers: 'Kogi State Corpers Management',
    attendance: 'Kogi State Attendance Management',
    schedule: 'Kogi State Work Schedule',
    evaluation: 'Kogi State Performance Evaluations',
    reports: 'Kogi State Reports & Analytics',
    profile: 'Kogi State Organization Profile',
    settings: 'Kogi PPA System Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Kogi State PPA Dashboard - ${ppaData?.organization}`,
    corpers: 'Manage Kogi corpers assigned to your organization',
    attendance: 'Track and manage Kogi corper daily attendance',
    schedule: 'View and manage Kogi State work schedules',
    evaluation: 'Evaluate Kogi corper performance',
    reports: 'Generate Kogi State organization reports',
    profile: 'Manage Kogi State organization information',
    settings: 'Configure Kogi PPA system settings and preferences'
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#006600] to-[#008800] rounded-lg flex items-center justify-center text-white font-bold">
            KG
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {sectionTitles[activeSection] || 'Dashboard'}
          </h1>
        </div>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your Kogi PPA'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}