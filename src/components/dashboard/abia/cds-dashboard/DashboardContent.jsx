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

export default function DashboardContent({ activeSection, cdsData, onUpdateProfile, darkMode }) {
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
        return <CDSSettings cdsData={cdsData} darkMode={darkMode} />;
      default:
        return <CDSOverview cdsData={cdsData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'CDS Dashboard Overview',
    members: 'Group Members Management',
    attendance: 'Attendance Management',
    activities: 'CDS Activities',
    dues: 'CDS Dues Management',
    schedule: 'CDS Schedule',
    reports: 'Reports & Analytics',
    profile: 'My Profile',
    settings: 'Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to ${cdsData?.cdsGroup} CDS Dashboard`,
    members: `Manage all members in ${cdsData?.cdsGroup} group`,
    attendance: 'Track and manage member attendance',
    activities: 'Plan and organize CDS activities',
    dues: 'Manage CDS dues collection and tracking',
    schedule: 'View and manage CDS meeting schedule',
    reports: 'Generate group reports and analytics',
    profile: 'Manage your coordinator profile',
    settings: 'Configure CDS group settings'
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {sectionTitles[activeSection] || 'Dashboard'}
        </h1>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your CDS group'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}