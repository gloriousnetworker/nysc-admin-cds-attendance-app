'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
  'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
  'Yobe', 'Zamfara'
];

const cdsGroups = [
  'Education', 'Health & Medical', 'Environment', 'Sports', 'ICT & Digital Skills',
  'Agriculture', 'Skill Acquisition', 'Road Safety', 'Red Cross', 'Media & Publicity',
  'Culture & Tourism', 'Legal Aid'
];

const adminRoles = [
  'PPA Owner',
  'CDS Group Coordinator',
  'Local Government Inspector',
  'Zonal Inspector'
];

export default function AdminSignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    state: '',
    localGovernment: '',
    zone: '',
    cdsGroup: '',
    ppaName: '',
    ppaAddress: '',
    ppaEmail: '',
    ppaPhone: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setError('');
    
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.role) {
        setError('Please fill all required fields');
        return;
      }
    } else if (step === 2) {
      if (!formData.state || !formData.password || !formData.confirmPassword) {
        setError('Please fill all required fields');
        return;
      }

      if (formData.role === 'Local Government Inspector' || formData.role === 'PPA Owner' || formData.role === 'CDS Group Coordinator') {
        if (!formData.localGovernment) {
          setError('Local Government is required for your role');
          return;
        }
      }

      if (formData.role === 'Zonal Inspector' && !formData.zone) {
        setError('Zone is required for Zonal Inspector');
        return;
      }

      if (formData.role === 'CDS Group Coordinator' && !formData.cdsGroup) {
        setError('Please select the CDS Group you will be coordinating');
        return;
      }

      if (formData.role === 'PPA Owner') {
        if (!formData.ppaName || !formData.ppaAddress) {
          setError('PPA Name and Address are required for PPA Owners');
          return;
        }
      }
      
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    }
    
    setStep(step + 1);
    
    if (step === 2 && !verificationSent) {
      setTimeout(() => {
        setVerificationSent(true);
        setFormData(prev => ({...prev, verificationCode: '123456'}));
      }, 100);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 3) {
      setLoading(true);
      setError('');
      
      if (!formData.verificationCode) {
        setError('Please enter verification code');
        setLoading(false);
        return;
      }
      
      setTimeout(() => {
        const adminData = {
          ...formData,
          fullName: `${formData.firstName} ${formData.lastName}`,
          adminId: `ADM-${Date.now()}`
        };
        
        setLoading(false);
        router.push('/login');
      }, 1500);
      
      return;
    }
    
    handleNext();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResendCode = () => {
    setFormData(prev => ({...prev, verificationCode: ''}));
    setError('');
    setTimeout(() => {
      setFormData(prev => ({...prev, verificationCode: '654321'}));
    }, 100);
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
      
      <div className="relative z-10 w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Administrator Registration</h1>
          <p className="text-gray-300 text-2xl">Register as a CDS system administrator</p>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="h-3 bg-white/20 rounded-full">
                <div 
                  className="h-3 bg-[#008753] rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-6 text-xl font-semibold text-white">
              Step {step} of 3
            </div>
          </div>
          
          <div className="flex justify-between">
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${step >= 1 ? 'bg-[#008753] text-white' : 'bg-white/20 text-gray-400'}`}>
                1
              </div>
              <div className="mt-2 text-lg font-medium text-white">Basic Info</div>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${step >= 2 ? 'bg-[#008753] text-white' : 'bg-white/20 text-gray-400'}`}>
                2
              </div>
              <div className="mt-2 text-lg font-medium text-white">Role Details</div>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${step >= 3 ? 'bg-[#008753] text-white' : 'bg-white/20 text-gray-400'}`}>
                3
              </div>
              <div className="mt-2 text-lg font-medium text-white">Verification</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-10">
          {error && (
            <div className="bg-red-500/20 border-2 border-red-500 text-red-200 p-5 rounded-xl text-lg">
              {error}
            </div>
          )}
          
          {step === 1 && (
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-2xl font-semibold text-white mb-4">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                  placeholder="Enter email address"
                  required
                />
              </div>
              
              <div>
                <label className="block text-2xl font-semibold text-white mb-4">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-2xl font-semibold text-white mb-4">
                  Administrative Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                  required
                >
                  <option value="" className="bg-slate-800">Select Role</option>
                  {adminRoles.map(role => (
                    <option key={role} value={role} className="bg-slate-800">{role}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-10">
              <div>
                <label className="block text-2xl font-semibold text-white mb-4">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                  required
                >
                  <option value="" className="bg-slate-800">Select State</option>
                  {nigerianStates.map(state => (
                    <option key={state} value={state} className="bg-slate-800">{state}</option>
                  ))}
                </select>
              </div>

              {(formData.role === 'Local Government Inspector' || formData.role === 'PPA Owner' || formData.role === 'CDS Group Coordinator') && (
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    Local Government *
                  </label>
                  <input
                    type="text"
                    name="localGovernment"
                    value={formData.localGovernment}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    placeholder="Enter Local Government"
                    required
                  />
                </div>
              )}

              {formData.role === 'Zonal Inspector' && (
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    Zone *
                  </label>
                  <input
                    type="text"
                    name="zone"
                    value={formData.zone}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    placeholder="Enter Zone (e.g., South-West, North-Central)"
                    required
                  />
                </div>
              )}

              {formData.role === 'CDS Group Coordinator' && (
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    CDS Group *
                  </label>
                  <select
                    name="cdsGroup"
                    value={formData.cdsGroup}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    required
                  >
                    <option value="" className="bg-slate-800">Select CDS Group</option>
                    {cdsGroups.map(group => (
                      <option key={group} value={group} className="bg-slate-800">{group}</option>
                    ))}
                  </select>
                </div>
              )}

              {formData.role === 'PPA Owner' && (
                <>
                  <div>
                    <label className="block text-2xl font-semibold text-white mb-4">
                      PPA/Organization Name *
                    </label>
                    <input
                      type="text"
                      name="ppaName"
                      value={formData.ppaName}
                      onChange={handleChange}
                      className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                      placeholder="Enter organization name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-2xl font-semibold text-white mb-4">
                      Business Address *
                    </label>
                    <textarea
                      name="ppaAddress"
                      value={formData.ppaAddress}
                      onChange={handleChange}
                      rows="3"
                      className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                      placeholder="Enter complete business address"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="block text-2xl font-semibold text-white mb-4">
                        PPA Email
                      </label>
                      <input
                        type="email"
                        name="ppaEmail"
                        value={formData.ppaEmail}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                        placeholder="Organization email"
                      />
                    </div>
                    <div>
                      <label className="block text-2xl font-semibold text-white mb-4">
                        PPA Phone
                      </label>
                      <input
                        type="tel"
                        name="ppaPhone"
                        value={formData.ppaPhone}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                        placeholder="Organization phone"
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    placeholder="Create password"
                    required
                  />
                </div>
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-10">
              <div className="bg-blue-500/20 border-2 border-blue-500 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">📧</div>
                  <h3 className="text-3xl font-bold text-blue-200 mb-3">Verification Required</h3>
                  <p className="text-xl text-blue-100">
                    We've sent a 6-digit code to <span className="font-bold">{formData.email}</span>
                  </p>
                  <p className="text-lg text-blue-200 mt-2">Demo code: 123456</p>
                </div>
                
                <div>
                  <label className="block text-2xl font-semibold text-white mb-4">
                    Verification Code *
                  </label>
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-5 text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#008753] focus:border-transparent text-center tracking-widest"
                    placeholder="Enter 6-digit code"
                    maxLength="6"
                    required
                  />
                </div>
                
                <div className="text-center mt-6">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-xl text-[#00a866] hover:text-white font-medium transition"
                  >
                    Didn't receive code? Resend (New: 654321)
                  </button>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Account Summary</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-xl text-gray-300">Name:</span>
                    <span className="text-xl font-semibold text-white">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xl text-gray-300">Role:</span>
                    <span className="text-xl font-semibold text-white">{formData.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xl text-gray-300">State:</span>
                    <span className="text-xl font-semibold text-white">{formData.state}</span>
                  </div>
                  {formData.localGovernment && (
                    <div className="flex justify-between">
                      <span className="text-xl text-gray-300">Local Government:</span>
                      <span className="text-xl font-semibold text-white">{formData.localGovernment}</span>
                    </div>
                  )}
                  {formData.zone && (
                    <div className="flex justify-between">
                      <span className="text-xl text-gray-300">Zone:</span>
                      <span className="text-xl font-semibold text-white">{formData.zone}</span>
                    </div>
                  )}
                  {formData.cdsGroup && (
                    <div className="flex justify-between">
                      <span className="text-xl text-gray-300">CDS Group:</span>
                      <span className="text-xl font-semibold text-white">{formData.cdsGroup}</span>
                    </div>
                  )}
                  {formData.ppaName && (
                    <div className="flex justify-between">
                      <span className="text-xl text-gray-300">Organization:</span>
                      <span className="text-xl font-semibold text-white">{formData.ppaName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between pt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-10 py-5 text-2xl font-bold border-2 border-[#008753] text-[#008753] rounded-xl hover:bg-[#008753] hover:text-white transition-all duration-300"
              >
                ← Back
              </button>
            ) : (
              <div></div>
            )}
            
            <button 
              onClick={handleSubmit}
              className="px-10 py-5 text-2xl font-bold bg-gradient-to-r from-[#008753] to-[#00a866] text-white rounded-xl hover:shadow-xl hover:shadow-[#008753]/50 focus:outline-none focus:ring-4 focus:ring-[#008753] transition-all duration-300 transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? 'Processing...' : step === 3 ? 'Complete Registration' : 'Next Step →'}
            </button>
          </div>
          
          <div className="text-center pt-10 border-t border-white/20">
            <span className="text-gray-300 text-xl">Already have an admin account? </span>
            <Link href="/admin/login" className="text-[#00a866] font-bold text-xl hover:underline ml-2">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}