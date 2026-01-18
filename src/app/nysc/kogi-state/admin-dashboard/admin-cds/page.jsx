'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CDSDashboardNavbar from '../../../../../components/dashboard/kogi-state-dashboard/cds-dashboard/DashboardNavbar';
import CDSDashboardSidebar from '../../../../../components/dashboard/kogi-state-dashboard/cds-dashboard/DashboardSidebar';
import CDSDashboardContent from '../../../../../components/dashboard/kogi-state-dashboard/cds-dashboard/DashboardContent';

export default function CDSDashboardPage() {
  const [cdsData, setCdsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const mockCdsData = {
        cdsId: 'KOG-CDS-001',
        fullName: 'Sarah Johnson',
        email: 'sarah.johnson@nysc.gov.ng',
        role: 'CDS Coordinator',
        cdsGroup: 'Education',
        state: 'Kogi',
        localGovernment: 'Lokoja',
        permissions: ['manage_attendance', 'view_reports', 'manage_members'],
        createdAt: new Date().toISOString()
      };

      const token = localStorage.getItem('nysc_cds_token');
      const storedCds = localStorage.getItem('nysc_cds_user');

      if (!token || !storedCds) {
        localStorage.setItem('nysc_cds_token', 'kogi_cds_token_' + Date.now());
        localStorage.setItem('nysc_cds_user', JSON.stringify(mockCdsData));
        setCdsData(mockCdsData);
      } else {
        try {
          const cds = JSON.parse(storedCds);
          setCdsData(cds);
        } catch (error) {
          setCdsData(mockCdsData);
          localStorage.setItem('nysc_cds_user', JSON.stringify(mockCdsData));
        }
      }

      const savedDarkMode = localStorage.getItem('nysc_user_dark_mode');
      if (savedDarkMode === 'true') {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }

      setLoading(false);
    };

    const timer = setTimeout(() => {
      checkAuth();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('nysc_user_dark_mode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('nysc_cds_token');
    localStorage.removeItem('nysc_cds_user');
    localStorage.removeItem('nysc_user_dark_mode');
    router.push('/login');
  };

  const handleUpdateProfile = (updatedData) => {
    setCdsData(updatedData);
    localStorage.setItem('nysc_cds_user', JSON.stringify(updatedData));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-t-4 border-gray-300 border-t-[#006600] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading Kogi CDS Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <CDSDashboardNavbar 
          cdsData={cdsData} 
          onLogout={handleLogout} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <div className="flex pt-16">
          <CDSDashboardSidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            darkMode={darkMode}
          />
          
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <CDSDashboardContent 
              activeSection={activeSection}
              cdsData={cdsData}
              onUpdateProfile={handleUpdateProfile}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </main>
        </div>
      </div>
    </div>
  );
}