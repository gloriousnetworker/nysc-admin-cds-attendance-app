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

export default function DashboardContent({ activeSection, zonalData, onUpdateProfile, darkMode }) {
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
      default:
        return <ZonalOverview zonalData={zonalData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Zonal Inspector Dashboard',
    lgis: 'Local Government Inspectors',
    states: 'States Management',
    ppas: 'PPA Overview',
    corpers: 'Corpers Statistics',
    reports: 'Zonal Reports',
    clearance: 'Clearance Approvals',
    audit: 'Audit Trail',
    profile: 'My Profile'
  };

  const sectionDescriptions = {
    overview: `Welcome to ${zonalData?.zone} Inspector Dashboard`,
    lgis: 'Monitor and manage Local Government Inspectors',
    states: 'Oversee NYSC activities across states',
    ppas: 'Monitor PPA performance across zone',
    corpers: 'View corper statistics and distribution',
    reports: 'Generate comprehensive zonal reports',
    clearance: 'Approve and manage clearance requests',
    audit: 'View system activities and audit logs',
    profile: 'Manage your zonal inspector profile'
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {sectionTitles[activeSection] || 'Dashboard'}
        </h1>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your zone'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}