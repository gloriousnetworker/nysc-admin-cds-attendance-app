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
    overview: 'FCT CDS Dashboard Overview',
    members: 'FCT Group Members Management',
    attendance: 'FCT Attendance Management',
    activities: 'FCT CDS Activities',
    dues: 'FCT CDS Dues Management',
    schedule: 'FCT CDS Schedule',
    reports: 'FCT Reports & Analytics',
    profile: 'FCT Coordinator Profile',
    settings: 'FCT CDS Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to FCT ${cdsData?.cdsGroup} CDS Dashboard`,
    members: `Manage all members in FCT ${cdsData?.cdsGroup} group`,
    attendance: 'Track and manage FCT member attendance',
    activities: 'Plan and organize FCT CDS activities',
    dues: 'Manage FCT CDS dues collection and tracking',
    schedule: 'View and manage FCT CDS meeting schedule',
    reports: 'Generate FCT group reports and analytics',
    profile: 'Manage your FCT coordinator profile',
    settings: 'Configure FCT CDS group settings'
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
          {sectionDescriptions[activeSection] || 'Manage your FCT CDS group'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}