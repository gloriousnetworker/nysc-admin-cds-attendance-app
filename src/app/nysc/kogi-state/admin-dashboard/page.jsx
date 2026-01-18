'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminDashboardNavbar from '../../../../components/dashboard/kogi-state-dashboard/admin-dashboard/DashboardNavbar';
import AdminDashboardSidebar from '../../../../components/dashboard/kogi-state-dashboard/admin-dashboard/DashboardSidebar';
import AdminDashboardContent from '../../../../components/dashboard/kogi-state-dashboard/admin-dashboard/DashboardContent';

export default function AdminDashboardPage() {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const mockAdminData = {
        adminId: 'KOG-ADM-001',
        fullName: 'Kogi State Super Administrator',
        email: 'admin.kogi@nysc.gov.ng',
        role: 'Kogi State Super Admin',
        permissions: ['all'],
        state: 'Kogi State',
        createdAt: new Date().toISOString()
      };

      const token = localStorage.getItem('nysc_admin_token');
      const storedAdmin = localStorage.getItem('nysc_admin_user');

      if (!token || !storedAdmin) {
        localStorage.setItem('nysc_admin_token', 'kogi_admin_token_' + Date.now());
        localStorage.setItem('nysc_admin_user', JSON.stringify(mockAdminData));
        setAdminData(mockAdminData);
      } else {
        try {
          const admin = JSON.parse(storedAdmin);
          setAdminData(admin);
        } catch (error) {
          setAdminData(mockAdminData);
          localStorage.setItem('nysc_admin_user', JSON.stringify(mockAdminData));
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
    localStorage.removeItem('nysc_admin_token');
    localStorage.removeItem('nysc_admin_user');
    localStorage.removeItem('nysc_user_dark_mode');
    router.push('/login');
  };

  const handleUpdateProfile = (updatedData) => {
    setAdminData(updatedData);
    localStorage.setItem('nysc_admin_user', JSON.stringify(updatedData));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-t-4 border-gray-300 border-t-[#006600] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading Kogi State Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AdminDashboardNavbar 
          adminData={adminData} 
          onLogout={handleLogout} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <div className="flex pt-16">
          <AdminDashboardSidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            darkMode={darkMode}
          />
          
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <AdminDashboardContent 
              activeSection={activeSection}
              adminData={adminData}
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