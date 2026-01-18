'use client';
import { useState } from 'react';
import CDSOverview from './sections/CDSOverview';
import CDSMembers from './sections/CDSMembers';
import CDSAttendance from './sections/CDSAttendance';
import CDSActivities from './sections/CDSActivities';
import CDSDues from './sections/CDSDues';
import CDSSchedule from './sections/CDSSchedule';
import CDSReports from './sections/CDSReports';
import CDSProfile from './sections/CDSProfile';
import CDSSettings from './sections/CDSSettings';

export default function DashboardContent({ activeSection, cdsData, onUpdateProfile, darkMode, toggleDarkMode }) {
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <CDSOverview cdsData={cdsData} darkMode={darkMode} />;
      case 'members':
        return <CDSMembers cdsData={cdsData} darkMode={darkMode} />;
      case 'attendance':
        return <CDSAttendance cdsData={cdsData} darkMode={darkMode} />;
      case 'activities':
        return <CDSActivities cdsData={cdsData} darkMode={darkMode} />;
      case 'dues':
        return <CDSDues cdsData={cdsData} darkMode={darkMode} />;
      case 'schedule':
        return <CDSSchedule cdsData={cdsData} darkMode={darkMode} />;
      case 'reports':
        return <CDSReports cdsData={cdsData} darkMode={darkMode} />;
      case 'profile':
        return <CDSProfile cdsData={cdsData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} />;
      case 'settings':
        return <CDSSettings cdsData={cdsData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <CDSOverview cdsData={cdsData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Kogi CDS Dashboard Overview',
    members: 'Kogi Group Members Management',
    attendance: 'Kogi Attendance Management',
    activities: 'Kogi CDS Activities',
    dues: 'Kogi CDS Dues Management',
    schedule: 'Kogi CDS Schedule',
    reports: 'Kogi CDS Reports & Analytics',
    profile: 'Kogi CDS Profile',
    settings: 'Kogi CDS Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Kogi ${cdsData?.cdsGroup} CDS Dashboard • Confluence State`,
    members: `Manage all Kogi members in ${cdsData?.cdsGroup} group`,
    attendance: 'Track and manage Kogi member attendance',
    activities: 'Plan and organize Kogi CDS activities',
    dues: 'Manage Kogi CDS dues collection and tracking',
    schedule: 'View and manage Kogi CDS meeting schedule',
    reports: 'Generate Kogi group reports and analytics',
    profile: 'Manage your Kogi coordinator profile',
    settings: 'Configure Kogi CDS group settings'
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#006600] to-[#008800] rounded-lg flex items-center justify-center text-white font-bold">
            KG
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {sectionTitles[activeSection] || 'Dashboard'}
          </h1>
        </div>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your Kogi CDS group'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}