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
        return <ZonalSettings zonalData={zonalData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <ZonalOverview zonalData={zonalData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Lagos Zonal Inspector Dashboard',
    lgis: 'Lagos Local Government Inspectors',
    states: 'Lagos States Management',
    ppas: 'Lagos PPA Overview',
    corpers: 'Lagos Corpers Statistics',
    reports: 'Lagos Zonal Reports',
    clearance: 'Lagos Clearance Approvals',
    audit: 'Lagos Audit Trail',
    profile: 'Lagos Zonal Profile',
    settings: 'Lagos Zonal Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Lagos ${zonalData?.zone} Inspector Dashboard • Centre of Excellence`,
    lgis: 'Monitor and manage Lagos Local Government Inspectors',
    states: 'Oversee NYSC activities across Lagos states',
    ppas: 'Monitor Lagos PPA performance across zone',
    corpers: 'View Lagos corper statistics and distribution',
    reports: 'Generate comprehensive Lagos zonal reports',
    clearance: 'Approve and manage Lagos clearance requests',
    audit: 'View Lagos system activities and audit logs',
    profile: 'Manage your Lagos zonal inspector profile',
    settings: 'Configure Lagos zonal inspector settings'
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
          {sectionDescriptions[activeSection] || 'Manage your Lagos zone'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}