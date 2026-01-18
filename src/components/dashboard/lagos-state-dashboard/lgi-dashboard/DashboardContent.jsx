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
import LGISettings from './sections/LGISettings';

export default function DashboardContent({ activeSection, lgiData, onUpdateProfile, darkMode, toggleDarkMode }) {
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
      case 'settings':
        return <LGISettings lgiData={lgiData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <LGIOverview lgiData={lgiData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Lagos LGI Dashboard Overview',
    corpers: 'Lagos Corpers Management',
    ppa: 'Lagos PPA Management',
    cds: 'Lagos CDS Groups',
    attendance: 'Lagos Attendance Monitoring',
    verification: 'Lagos Verifications',
    reports: 'Lagos Reports & Analytics',
    complaints: 'Lagos Complaints Management',
    profile: 'Lagos LGI Profile',
    settings: 'Lagos LGI Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Lagos Local Government Inspector Dashboard - ${lgiData?.localGovernment} LGA`,
    corpers: `Manage Lagos corpers in ${lgiData?.localGovernment}`,
    ppa: 'Monitor and verify Lagos Place of Primary Assignments',
    cds: 'Oversee Lagos Community Development Service groups',
    attendance: 'Monitor Lagos corper attendance across PPAs',
    verification: 'Handle Lagos verification requests and approvals',
    reports: 'Generate Lagos local government area reports',
    complaints: 'Manage Lagos complaints and resolutions',
    profile: 'Manage your Lagos inspector profile',
    settings: 'Configure Lagos LGI settings'
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
          {sectionDescriptions[activeSection] || 'Manage your Lagos jurisdiction'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}