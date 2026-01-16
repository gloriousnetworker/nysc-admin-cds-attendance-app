'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showStateSelection, setShowStateSelection] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const router = useRouter();

  const states = [
    { id: 'fct', name: 'FCT', label: 'Federal Capital Territory' },
    { id: 'lagos-state', name: 'LAGOS', label: 'Lagos State' },
    { id: 'kogi-state', name: 'KOGI', label: 'Kogi State' }
  ];

  const roles = [
    { id: 'super-admin', name: 'SUPER ADMIN', route: 'admin-dashboard' },
    { id: 'cds-admin', name: 'CDS ADMIN', route: 'admin-dashboard/admin-cds' },
    { id: 'lgi-admin', name: 'LGI ADMIN', route: 'admin-dashboard/admin-lgi' },
    { id: 'ppa-admin', name: 'PPA ADMIN', route: 'admin-dashboard/admin-ppa' },
    { id: 'zonal-inspector', name: 'ZONAL INSPECTOR', route: 'admin-dashboard/admin-zonal-inspector' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        router.push('/admin-dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStateSelect = (stateId) => {
    setSelectedState(stateId);
    setShowStateSelection(false);
    setShowRoleSelection(true);
  };

  const handleRoleSelect = (role) => {
    const route = `/nysc/${selectedState}/${role.route}`;
    router.push(route);
  };

  const handleBackToStateSelection = () => {
    setShowRoleSelection(false);
    setShowStateSelection(true);
  };

  const handleBackToMain = () => {
    setShowStateSelection(false);
    setShowRoleSelection(false);
    setSelectedState('');
  };

  const handleDemoLogin = () => {
    setShowStateSelection(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-8 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-playfair relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/images/nysc-logo.png')" }}
        ></div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#008753] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      </div>
      
      <Link 
        href="/" 
        className="absolute top-6 left-6 z-20 text-3xl text-white hover:text-gray-300 transition"
      >
        &lt;
      </Link>
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="h-12 w-12 border-4 border-t-4 border-gray-300 border-t-[#008753] rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Administrator Portal</h1>
          <p className="text-gray-300 text-2xl">Access the CDS management system</p>
        </div>
        
        {!showStateSelection && !showRoleSelection ? (
          <div className="space-y-10">
            {error && (
              <div className="bg-red-500/20 border-2 border-red-500 text-red-200 p-5 rounded-lg text-lg">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-2xl font-semibold text-white mb-4">
                Admin Email
              </label>
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                placeholder="admin@nysc.gov.ng"
                required
              />
            </div>
            
            <div>
              <label className="block text-2xl font-semibold text-white mb-4">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="text-right">
              <Link href="/admin/forgot-password" className="text-xl text-[#00a866] hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full rounded-xl bg-gradient-to-r from-[#008753] to-[#00a866] text-white font-bold py-5 text-2xl hover:shadow-xl hover:shadow-[#008753]/50 focus:outline-none focus:ring-4 focus:ring-[#008753] transition-all duration-300 transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
            
            <div className="text-center pt-8">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold py-5 text-xl rounded-xl hover:bg-white/20 transition mb-8"
              >
                Quick Demo Access
              </button>
              
              <div className="border-t border-white/20 pt-8">
                <p className="text-gray-400 text-sm">
                  Authorized personnel only. All activities are monitored.
                </p>
              </div>
            </div>
          </div>
        ) : showStateSelection ? (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Select State</h2>
              <p className="text-gray-300 text-xl">Choose your state dashboard</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {states.map((state) => (
                <button
                  key={state.id}
                  onClick={() => handleStateSelect(state.id)}
                  className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-6 text-2xl text-white font-bold hover:bg-white/20 hover:border-[#008753] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="text-3xl mb-2">{state.name}</div>
                  <div className="text-lg text-gray-300">{state.label}</div>
                </button>
              ))}
            </div>
            
            <button
              onClick={handleBackToMain}
              className="w-full rounded-xl border-2 border-white/30 bg-transparent text-white font-bold py-4 text-xl hover:bg-white/10 transition"
            >
              ← Back to Login
            </button>
          </div>
        ) : showRoleSelection ? (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#008753] text-white px-4 py-2 rounded-lg text-xl font-bold">
                  {states.find(s => s.id === selectedState)?.name}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Select Role</h2>
              <p className="text-gray-300 text-xl">Choose your dashboard access level</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role)}
                  className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white font-bold hover:bg-white/20 hover:border-[#008753] transition-all duration-300 transform hover:scale-[1.02] text-left"
                >
                  {role.name}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={handleBackToStateSelection}
                className="flex-1 rounded-xl border-2 border-white/30 bg-transparent text-white font-bold py-4 text-xl hover:bg-white/10 transition"
              >
                ← Change State
              </button>
              <button
                onClick={handleBackToMain}
                className="flex-1 rounded-xl border-2 border-white/30 bg-transparent text-white font-bold py-4 text-xl hover:bg-white/10 transition"
              >
                Main Menu
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}