'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PPADashboardNavbar from '../../../../../components/dashboard/fct-dashboard/ppa-dashboard/DashboardNavbar';
import PPADashboardSidebar from '../../../../../components/dashboard/fct-dashboard/ppa-dashboard/DashboardSidebar';
import PPADashboardContent from '../../../../../components/dashboard/fct-dashboard/ppa-dashboard/DashboardContent';

export default function PPADashboardPage() {
  const [ppaData, setPpaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const mockPpaData = {
        ppaId: 'FCT-PPA-001',
        fullName: 'Mr. Ibrahim Bello',
        email: 'ibrahim@fcttechsolutions.ng',
        role: 'FCT PPA Owner',
        organization: 'FCT Tech Solutions Ltd',
        organizationType: 'Technology',
        state: 'FCT Abuja',
        localGovernment: 'Abuja Municipal',
        zone: 'Zone 4',
        address: 'Area 11, Garki, Abuja',
        phone: '08087654321',
        email: 'contact@fcttechsolutions.ng',
        verified: true,
        rating: '4.9',
        permissions: ['manage_corpers', 'mark_attendance', 'generate_reports'],
        createdAt: new Date().toISOString()
      };

      const token = localStorage.getItem('nysc_ppa_token');
      const storedPpa = localStorage.getItem('nysc_ppa_user');

      if (!token || !storedPpa) {
        localStorage.setItem('nysc_ppa_token', 'fct_ppa_token_' + Date.now());
        localStorage.setItem('nysc_ppa_user', JSON.stringify(mockPpaData));
        setPpaData(mockPpaData);
      } else {
        try {
          const ppa = JSON.parse(storedPpa);
          setPpaData(ppa);
        } catch (error) {
          setPpaData(mockPpaData);
          localStorage.setItem('nysc_ppa_user', JSON.stringify(mockPpaData));
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
    localStorage.removeItem('nysc_ppa_token');
    localStorage.removeItem('nysc_ppa_user');
    localStorage.removeItem('nysc_user_dark_mode');
    router.push('/login');
  };

  const handleUpdateProfile = (updatedData) => {
    setPpaData(updatedData);
    localStorage.setItem('nysc_ppa_user', JSON.stringify(updatedData));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-t-4 border-gray-300 border-t-[#008753] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading FCT PPA Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <PPADashboardNavbar 
          ppaData={ppaData} 
          onLogout={handleLogout} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <div className="flex pt-16">
          <PPADashboardSidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            darkMode={darkMode}
          />
          
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <PPADashboardContent 
              activeSection={activeSection}
              ppaData={ppaData}
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