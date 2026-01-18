'use client';
import { useState } from 'react';
import ZonalOverview from './sections/ZonalOverview';
import ZonalLGIs from './sections/ZonalLGIs';
import ZonalStates from './sections/ZonalStates';
import ZonalPPAs from './sections/ZonalPPAs';
import ZonalCorpers from './sections/ZonalCorpers';
import ZonalReports from './sections/ZonalReports';
import ZonalClearance from './sections/ZonalClearance';
import ZonalAudit from './sections/ZonalAudit';
import ZonalProfile from './sections/ZonalProfile';
import ZonalSettings from './sections/ZonalSettings';

export default function DashboardContent({ activeSection, zonalData, onUpdateProfile, darkMode, toggleDarkMode }) {
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <ZonalOverview zonalData={zonalData} darkMode={darkMode} />;
      case 'lgis':
        return <ZonalLGIs zonalData={zonalData} darkMode={darkMode} />;
      case 'states':
        return <ZonalStates zonalData={zonalData} darkMode={darkMode} />;
      case 'ppas':
        return <ZonalPPAs zonalData={zonalData} darkMode={darkMode} />;
      case 'corpers':
        return <ZonalCorpers zonalData={zonalData} darkMode={darkMode} />;
      case 'reports':
        return <ZonalReports zonalData={zonalData} darkMode={darkMode} />;
      case 'clearance':
        return <ZonalClearance zonalData={zonalData} darkMode={darkMode} />;
      case 'audit':
        return <ZonalAudit zonalData={zonalData} darkMode={darkMode} />;
      case 'profile':
        return <ZonalProfile zonalData={zonalData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} />;
      case 'settings':
        return <ZonalSettings zonalData={zonalData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <ZonalOverview zonalData={zonalData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Kogi Zonal Dashboard Overview',
    lgis: 'Kogi State Local Government Inspectors',
    states: 'Kogi State Management',
    ppas: 'Kogi State PPA Overview',
    corpers: 'Kogi State Corpers Statistics',
    reports: 'Kogi State Zonal Reports',
    clearance: 'Kogi State Clearance Approvals',
    audit: 'Kogi State Audit Trail',
    profile: 'Kogi Zonal Inspector Profile',
    settings: 'Kogi Zonal System Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Kogi State Zonal Inspector Dashboard - ${zonalData?.zone}`,
    lgis: 'Monitor and manage Kogi State Local Government Inspectors',
    states: 'Oversee NYSC activities across Kogi State',
    ppas: 'Monitor Kogi State PPA performance across zone',
    corpers: 'View Kogi corper statistics and distribution',
    reports: 'Generate comprehensive Kogi State zonal reports',
    clearance: 'Approve and manage Kogi clearance requests',
    audit: 'View Kogi system activities and audit logs',
    profile: 'Manage your Kogi zonal inspector profile',
    settings: 'Configure Kogi zonal system settings and preferences'
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
          {sectionDescriptions[activeSection] || 'Manage your Kogi zone'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}