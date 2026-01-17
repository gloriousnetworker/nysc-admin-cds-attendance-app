'use client';
import { useState } from 'react';
import ZonalOverview from './sections/ZonalOverview';
import ZonalLGIs from './sections/ZonalLGIs';
import ZonalPPAs from './sections/ZonalPPAs';
import ZonalCorpers from './sections/ZonalCorpers';
import ZonalReports from './sections/ZonalReports';
import ZonalClearance from './sections/ZonalClearance';
import ZonalAudit from './sections/ZonalAudit';
import ZonalProfile from './sections/ZonalProfile';
import ZonalSettings from './sections/ZonalSettings';

export default function FCTZonalDashboardContent({ activeSection, zonalData, onUpdateProfile, darkMode, toggleDarkMode }) {
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <ZonalOverview zonalData={zonalData} darkMode={darkMode} />;
      case 'lgis':
        return <ZonalLGIs zonalData={zonalData} darkMode={darkMode} />;
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
        return <ZonalSettings zonalData={zonalData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <ZonalOverview zonalData={zonalData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'FCT Zonal Inspector Dashboard',
    lgis: 'FCT Local Government Inspectors',
    ppas: 'FCT PPA Overview',
    corpers: 'FCT Corpers Statistics',
    reports: 'FCT Zonal Reports',
    clearance: 'FCT Clearance Approvals',
    audit: 'FCT Audit Trail',
    profile: 'My FCT Profile',
    settings: 'FCT Settings'
  };

  const sectionDescriptions = {
    overview: 'Welcome to FCT Zonal Inspector Dashboard. Monitor FCT zones activities.',
    lgis: 'Monitor and manage FCT Local Government Inspectors',
    ppas: 'Monitor FCT PPA performance across zones',
    corpers: 'View FCT corper statistics and distribution',
    reports: 'Generate comprehensive FCT zonal reports',
    clearance: 'Approve and manage FCT clearance requests',
    audit: 'View FCT system activities and audit logs',
    profile: 'Manage your FCT zonal inspector profile',
    settings: 'Configure FCT zonal inspector settings'
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
          {sectionDescriptions[activeSection] || 'Manage your FCT zone'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}