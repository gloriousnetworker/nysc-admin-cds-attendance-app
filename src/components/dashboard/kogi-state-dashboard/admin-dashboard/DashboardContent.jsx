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

export default function DashboardContent({ activeSection, adminData, onUpdateProfile, darkMode, toggleDarkMode }) {
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
        return <SettingsManagement adminData={adminData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <AdminOverview adminData={adminData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Kogi State Dashboard Overview',
    corpers: 'Kogi State Corpers Management',
    ppa: 'Kogi State PPA Owners Management',
    cds: 'Kogi State CDS Coordinators Management',
    lgi: 'Kogi State Local Government Inspectors',
    zi: 'Kogi State Zonal Inspectors Management',
    admins: 'Kogi State All Administrators',
    attendance: 'Kogi State Attendance Management',
    reports: 'Kogi State Reports & Analytics',
    settings: 'Kogi State System Settings'
  };

  const sectionDescriptions = {
    overview: 'Welcome to the Kogi State NYSC Super Admin Dashboard. Monitor all Kogi system activities.',
    corpers: 'Manage all NYSC corpers registered in Kogi State system',
    ppa: 'Manage Kogi State Place of Primary Assignment owners and organizations',
    cds: 'Manage Kogi State CDS Group Coordinators and their activities',
    lgi: 'Manage Kogi State Local Government Inspectors and their jurisdictions',
    zi: 'Manage Kogi State Zonal Inspectors across different zones',
    admins: 'Manage all Kogi State administrative accounts and permissions',
    attendance: 'Monitor and manage Kogi State CDS attendance system-wide',
    reports: 'Generate comprehensive Kogi State reports and analytics',
    settings: 'Configure Kogi State system settings and preferences'
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
          {sectionDescriptions[activeSection] || 'Manage your Kogi State system'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}