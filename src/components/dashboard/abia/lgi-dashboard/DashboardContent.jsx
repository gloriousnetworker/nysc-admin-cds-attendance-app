'use client';
import { useState } from 'react';
import LGIOverview from './sections/LGIOverview';
import LGICorpers from './sections/LGICorpers';
import LGIPPAManagement from './sections/LGIPPAManagement';
import LGICDSGroups from './sections/LGICDSGroups';
import LGIAttendance from './sections/LGIAttendance';
import LGIVerifications from './sections/LGIVerifications';
import LGIReports from './sections/LGIReports';
import LGIComplaints from './sections/LGIComplaints';
import LGIProfile from './sections/LGIProfile';

export default function DashboardContent({ activeSection, lgiData, onUpdateProfile, darkMode }) {
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <LGIOverview lgiData={lgiData} darkMode={darkMode} />;
      case 'corpers':
        return <LGICorpers lgiData={lgiData} darkMode={darkMode} />;
      case 'ppa':
        return <LGIPPAManagement lgiData={lgiData} darkMode={darkMode} />;
      case 'cds':
        return <LGICDSGroups lgiData={lgiData} darkMode={darkMode} />;
      case 'attendance':
        return <LGIAttendance lgiData={lgiData} darkMode={darkMode} />;
      case 'verification':
        return <LGIVerifications lgiData={lgiData} darkMode={darkMode} />;
      case 'reports':
        return <LGIReports lgiData={lgiData} darkMode={darkMode} />;
      case 'complaints':
        return <LGIComplaints lgiData={lgiData} darkMode={darkMode} />;
      case 'profile':
        return <LGIProfile lgiData={lgiData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} />;
      default:
        return <LGIOverview lgiData={lgiData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'LGI Dashboard Overview',
    corpers: 'Corpers Management',
    ppa: 'PPA Management',
    cds: 'CDS Groups',
    attendance: 'Attendance Monitoring',
    verification: 'Verifications',
    reports: 'Reports & Analytics',
    complaints: 'Complaints Management',
    profile: 'My Profile'
  };

  const sectionDescriptions = {
    overview: `Welcome to Local Government Inspector Dashboard - ${lgiData?.localGovernment}`,
    corpers: `Manage corpers in ${lgiData?.localGovernment}`,
    ppa: 'Monitor and verify Place of Primary Assignments',
    cds: 'Oversee Community Development Service groups',
    attendance: 'Monitor corper attendance across PPAs',
    verification: 'Handle verification requests and approvals',
    reports: 'Generate local government area reports',
    complaints: 'Manage complaints and resolutions',
    profile: 'Manage your inspector profile'
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {sectionTitles[activeSection] || 'Dashboard'}
        </h1>
        <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {sectionDescriptions[activeSection] || 'Manage your jurisdiction'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}