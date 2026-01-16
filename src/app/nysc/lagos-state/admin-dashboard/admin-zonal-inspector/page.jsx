'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ZonalDashboardNavbar from '../../../../../components/dashboard/lagos-state-dashboard/zonal-inspector-dashboard/DashboardNavbar';
import ZonalDashboardSidebar from '../../../../../components/dashboard/lagos-state-dashboard/zonal-inspector-dashboard/DashboardSidebar';
import ZonalDashboardContent from '../../../../../components/dashboard/lagos-state-dashboard/zonal-inspector-dashboard/DashboardContent';

export default function ZonalDashboardPage() {
  const [zonalData, setZonalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const mockZonalData = {
        zonalId: 'ZI-001',
        fullName: 'Dr. Ahmed Musa',
        email: 'ahmed.musa@nysc.gov.ng',
        role: 'Zonal Inspector',
        zone: 'South-West Zone',
        states: ['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti'],
        permissions: ['monitor_lgis', 'oversee_ppa', 'generate_zonal_reports', 'approve_clearance'],
        jurisdiction: 'South-West Geo-Political Zone',
        createdAt: new Date().toISOString()
      };

      const token = localStorage.getItem('nysc_zonal_token');
      const storedZonal = localStorage.getItem('nysc_zonal_user');

      if (!token || !storedZonal) {
        localStorage.setItem('nysc_zonal_token', 'demo_zonal_token_' + Date.now());
        localStorage.setItem('nysc_zonal_user', JSON.stringify(mockZonalData));
        setZonalData(mockZonalData);
      } else {
        try {
          const zonal = JSON.parse(storedZonal);
          setZonalData(zonal);
        } catch (error) {
          setZonalData(mockZonalData);
          localStorage.setItem('nysc_zonal_user', JSON.stringify(mockZonalData));
        }
      }

      const savedDarkMode = localStorage.getItem('nysc_dark_mode');
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
    localStorage.setItem('nysc_dark_mode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('nysc_zonal_token');
    localStorage.removeItem('nysc_zonal_user');
    localStorage.removeItem('nysc_dark_mode');
    router.push('/login');
  };

  const handleUpdateProfile = (updatedData) => {
    setZonalData(updatedData);
    localStorage.setItem('nysc_zonal_user', JSON.stringify(updatedData));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-t-4 border-gray-300 border-t-[#008753] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading Zonal Inspector Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ZonalDashboardNavbar 
          zonalData={zonalData} 
          onLogout={handleLogout} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <div className="flex pt-16">
          <ZonalDashboardSidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            darkMode={darkMode}
            zonalData={zonalData}
          />
          
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <ZonalDashboardContent 
              activeSection={activeSection}
              zonalData={zonalData}
              onUpdateProfile={handleUpdateProfile}
              darkMode={darkMode}
            />
          </main>
        </div>
      </div>
    </div>
  );
}