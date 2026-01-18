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
      case 'settings':
        return <LGISettings lgiData={lgiData} onUpdateProfile={onUpdateProfile} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <LGIOverview lgiData={lgiData} darkMode={darkMode} />;
    }
  };

  const sectionTitles = {
    overview: 'Kogi LGI Dashboard Overview',
    corpers: 'Kogi State Corpers Management',
    ppa: 'Kogi State PPA Management',
    cds: 'Kogi State CDS Groups',
    attendance: 'Kogi State Attendance Monitoring',
    verification: 'Kogi State Verifications',
    reports: 'Kogi State Reports & Analytics',
    complaints: 'Kogi State Complaints Management',
    settings: 'Kogi LGI System Settings'
  };

  const sectionDescriptions = {
    overview: `Welcome to Kogi State Local Government Inspector Dashboard - ${lgiData?.localGovernment}`,
    corpers: `Manage Kogi corpers in ${lgiData?.localGovernment} Local Government Area`,
    ppa: 'Monitor and verify Kogi State Place of Primary Assignments',
    cds: 'Oversee Kogi State Community Development Service groups',
    attendance: 'Monitor Kogi corper attendance across PPAs',
    verification: 'Handle Kogi State verification requests and approvals',
    reports: 'Generate Kogi State local government area reports',
    complaints: 'Manage Kogi State complaints and resolutions',
    settings: 'Configure Kogi LGI system settings and preferences'
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
          {sectionDescriptions[activeSection] || 'Manage your Kogi LGI jurisdiction'}
        </p>
      </div>
      
      {renderSection()}
    </div>
  );
}