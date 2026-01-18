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
    overview: 'Lagos CDS Dashboard Overview',
    members: 'Lagos Group Members Management',
    attendance: 'Lagos Attendance Management',
    activities: 'Lagos CDS Activities',
    dues: 'Lagos CDS Dues Management',
    schedule: 'Lagos CDS Schedule',
    reports: 'Lagos CDS Reports & Analytics',
    profile: 'Lagos CDS Profile',
    settings: 'Lagos CDS Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Lagos ${cdsData?.cdsGroup} CDS Dashboard • Centre of Excellence`,
    members: `Manage all Lagos members in ${cdsData?.cdsGroup} group`,
    attendance: 'Track and manage Lagos member attendance',
    activities: 'Plan and organize Lagos CDS activities',
    dues: 'Manage Lagos CDS dues collection and tracking',
    schedule: 'View and manage Lagos CDS meeting schedule',
    reports: 'Generate Lagos group reports and analytics',
    profile: 'Manage your Lagos coordinator profile',
    settings: 'Configure Lagos CDS group settings'
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
          {sectionDescriptions[activeSection] || 'Manage your Lagos CDS group'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}