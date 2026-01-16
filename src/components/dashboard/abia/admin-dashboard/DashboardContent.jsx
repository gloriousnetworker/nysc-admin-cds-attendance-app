'use client';
import { useState } from 'react';
import AdminOverview from './sections/AdminOverview';
import CorpersManagement from './sections/CorpersManagement';
import PPAOwnersManagement from './sections/PPAOwnersManagement';
import CDSCoordinatorsManagement from './sections/CDSCoordinatorsManagement';
import LGInspectorsManagement from './sections/LGInspectorsManagement';
import ZonalInspectorsManagement from './sections/ZonalInspectorsManagement';
import AllAdminsManagement from './sections/AllAdminsManagement';
import AttendanceManagement from './sections/AttendanceManagement';
import ReportsManagement from './sections/ReportsManagement';
import SettingsManagement from './sections/SettingsManagement';

export default function DashboardContent({ activeSection, adminData, onUpdateProfile, darkMode }) {
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <AdminOverview adminData={adminData} darkMode={darkMode} />;
      case 'corpers':
        return <CorpersManagement darkMode={darkMode} />;
      case 'ppa':
        return <PPAOwnersManagement darkMode={darkMode} />;
      case 'cds':
        return <CDSCoordinatorsManagement darkMode={darkMode} />;
      case 'lgi':
        return <LGInspectorsManagement darkMode={darkMode} />;
      case 'zi':
        return <ZonalInspectorsManagement darkMode={darkMode} />;
      case 'admins':
        return <AllAdminsManagement darkMode={darkMode} />;
      case 'attendance':
        return <AttendanceManagement darkMode={darkMode} />;
      case 'reports':
        return <ReportsManagement darkMode={darkMode} />;
      case 'settings':
        return <SettingsManagement adminData={adminData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} />;
      default:
        return <AdminOverview adminData={adminData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Dashboard Overview',
    corpers: 'Corpers Management',
    ppa: 'PPA Owners Management',
    cds: 'CDS Coordinators Management',
    lgi: 'Local Government Inspectors',
    zi: 'Zonal Inspectors Management',
    admins: 'All Administrators',
    attendance: 'Attendance Management',
    reports: 'Reports & Analytics',
    settings: 'System Settings'
  };

  const sectionDescriptions = {
    overview: 'Welcome to the NYSC Super Admin Dashboard. Monitor all system activities.',
    corpers: 'Manage all NYSC corpers registered in the system',
    ppa: 'Manage Place of Primary Assignment owners and organizations',
    cds: 'Manage CDS Group Coordinators and their activities',
    lgi: 'Manage Local Government Inspectors and their jurisdictions',
    zi: 'Manage Zonal Inspectors across different zones',
    admins: 'Manage all administrative accounts and permissions',
    attendance: 'Monitor and manage CDS attendance system-wide',
    reports: 'Generate comprehensive reports and analytics',
    settings: 'Configure system settings and preferences'
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {sectionTitles[activeSection] || 'Dashboard'}
        </h1>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your system'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}