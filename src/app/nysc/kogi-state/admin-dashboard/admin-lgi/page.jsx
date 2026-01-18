'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LGIDashboardNavbar from '../../../../../components/dashboard/kogi-state-dashboard/lgi-dashboard/DashboardNavbar';
import LGIDashboardSidebar from '../../../../../components/dashboard/kogi-state-dashboard/lgi-dashboard/DashboardSidebar';
import LGIDashboardContent from '../../../../../components/dashboard/kogi-state-dashboard/lgi-dashboard/DashboardContent';

export default function LGIDashboardPage() {
  const [lgiData, setLgiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const mockLgiData = {
        lgiId: 'KOG-LGI-001',
        fullName: 'Mr. Kogi Inspector',
        email: 'lgi.kogi@nysc.gov.ng',
        role: 'Kogi Local Government Inspector',
        state: 'Kogi State',
        localGovernment: 'Lokoja',
        permissions: ['monitor_corpers', 'verify_attendance', 'generate_reports', 'manage_ppa'],
        jurisdiction: 'Lokoja Local Government Area',
        createdAt: new Date().toISOString()
      };

      const token = localStorage.getItem('nysc_lgi_token');
      const storedLgi = localStorage.getItem('nysc_lgi_user');

      if (!token || !storedLgi) {
        localStorage.setItem('nysc_lgi_token', 'kogi_lgi_token_' + Date.now());
        localStorage.setItem('nysc_lgi_user', JSON.stringify(mockLgiData));
        setLgiData(mockLgiData);
      } else {
        try {
          const lgi = JSON.parse(storedLgi);
          setLgiData(lgi);
        } catch (error) {
          setLgiData(mockLgiData);
          localStorage.setItem('nysc_lgi_user', JSON.stringify(mockLgiData));
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
    localStorage.removeItem('nysc_lgi_token');
    localStorage.removeItem('nysc_lgi_user');
    localStorage.removeItem('nysc_user_dark_mode');
    router.push('/login');
  };

  const handleUpdateProfile = (updatedData) => {
    setLgiData(updatedData);
    localStorage.setItem('nysc_lgi_user', JSON.stringify(updatedData));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-t-4 border-gray-300 border-t-[#006600] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading Kogi LGI Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <LGIDashboardNavbar 
          lgiData={lgiData} 
          onLogout={handleLogout} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <div className="flex pt-16">
          <LGIDashboardSidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            darkMode={darkMode}
          />
          
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <LGIDashboardContent 
              activeSection={activeSection}
              lgiData={lgiData}
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