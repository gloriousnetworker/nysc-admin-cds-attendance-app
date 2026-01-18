'use client';
import { useState } from 'react';

export default function SettingsManagement({ adminData, onUpdateProfile, darkMode, toggleDarkMode }) {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      reminders: true
    },
    privacy: {
      profileVisibility: 'public',
      showAttendance: true,
      showContact: false
    },
    security: {
      twoFactor: false,
      loginAlerts: true
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'WAT'
    }
  });

  const handleToggle = (category, key) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key]
      }
    }));
  };

  const handleSelectChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 sticky top-6`}>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Settings</h3>
            <div className="space-y-2">
              {['general', 'notifications', 'privacy', 'security', 'account'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#006600] to-[#008800] text-white'
                      : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                  }`}
                >
                  <span className="capitalize">{tab} Settings</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>General Settings</h3>
              
              <div className="space-y-6">
                <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Profile Preferences</h4>
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Display Theme
                      </label>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => toggleDarkMode(false)}
                          className={`p-4 border-2 rounded-lg ${!darkMode ? 'border-[#006600] bg-green-50 dark:bg-green-900/20' : 'border-gray-300 dark:border-gray-600'}`}
                        >
                          <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Light Mode</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Default theme</div>
                        </button>
                        <button
                          onClick={() => toggleDarkMode(true)}
                          className={`p-4 border-2 rounded-lg ${darkMode ? 'border-[#006600] bg-green-50 dark:bg-green-900/20' : 'border-gray-300 dark:border-gray-600'}`}
                        >
                          <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Dark Mode</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Reduced eye strain</div>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Language Preference
                      </label>
                      <select
                        value={settings.preferences.language}
                        onChange={(e) => handleSelectChange('preferences', 'language', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#006600] focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      >
                        <option value="en">English</option>
                        <option value="ha">Hausa</option>
                        <option value="yo">Yoruba</option>
                        <option value="ig">Igbo</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Time Zone
                      </label>
                      <select
                        value={settings.preferences.timezone}
                        onChange={(e) => handleSelectChange('preferences', 'timezone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#006600] focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      >
                        <option value="WAT">West Africa Time (WAT)</option>
                        <option value="GMT">Greenwich Mean Time (GMT)</option>
                        <option value="EST">Eastern Standard Time (EST)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Kogi State Display</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Show Kogi State Badge</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Display Kogi State branding</div>
                      </div>
                      <button className="relative">
                        <div className={`w-12 h-6 rounded-full transition bg-gradient-to-r from-[#006600] to-[#008800]`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform left-7`}></div>
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Confluence View</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Group by Local Government Area</div>
                      </div>
                      <button className="relative">
                        <div className={`w-12 h-6 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                          <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Notification Settings</h3>
              
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Email Notifications</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive updates via email</div>
                    </div>
                    <button onClick={() => handleToggle('notifications', 'email')} className="relative">
                      <div className={`w-12 h-6 rounded-full transition ${settings.notifications.email ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.notifications.email ? 'left-7' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>SMS Notifications</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive text message alerts</div>
                    </div>
                    <button onClick={() => handleToggle('notifications', 'sms')} className="relative">
                      <div className={`w-12 h-6 rounded-full transition ${settings.notifications.sms ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.notifications.sms ? 'left-7' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Push Notifications</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Browser and app notifications</div>
                    </div>
                    <button onClick={() => handleToggle('notifications', 'push')} className="relative">
                      <div className={`w-12 h-6 rounded-full transition ${settings.notifications.push ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.notifications.push ? 'left-7' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Kogi CDS Reminders</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kogi State CDS meeting reminders</div>
                    </div>
                    <button onClick={() => handleToggle('notifications', 'reminders')} className="relative">
                      <div className={`w-12 h-6 rounded-full transition ${settings.notifications.reminders ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.notifications.reminders ? 'left-7' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200'} border rounded-xl p-6`}>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Kogi State Alerts</h4>
                <p className={`${darkMode ? 'text-green-400' : 'text-green-700'} mb-4`}>
                  Get notified about Kogi State specific events, CDS meetings, and state announcements
                </p>
                <button className={`px-6 py-2 rounded-lg font-medium ${darkMode ? 'bg-green-800/30 text-green-300 hover:bg-green-800/50' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>
                  Configure Kogi Alerts
                </button>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Privacy Settings</h3>
              
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                      Profile Visibility
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['public', 'private', 'kogi-admin'].map(visibility => (
                        <button
                          key={visibility}
                          onClick={() => handleSelectChange('privacy', 'profileVisibility', visibility)}
                          className={`p-4 border-2 rounded-lg text-center capitalize ${
                            settings.privacy.profileVisibility === visibility
                              ? 'border-[#006600] bg-green-50 dark:bg-green-900/20'
                              : `${darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'}`
                          }`}
                        >
                          <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                            {visibility === 'kogi-admin' ? 'Kogi Admins Only' : visibility}
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {visibility === 'public' && 'Visible to all Kogi users'}
                            {visibility === 'private' && 'Only you can see'}
                            {visibility === 'kogi-admin' && 'Visible to Kogi State admins'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Show Attendance to Kogi CDS</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Allow Kogi CDS members to view your attendance</div>
                      </div>
                      <button onClick={() => handleToggle('privacy', 'showAttendance')} className="relative">
                        <div className={`w-12 h-6 rounded-full transition ${settings.privacy.showAttendance ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.privacy.showAttendance ? 'left-7' : 'left-1'}`}></div>
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Show Contact to Kogi CDS</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Display contact to Kogi CDS group members</div>
                      </div>
                      <button onClick={() => handleToggle('privacy', 'showContact')} className="relative">
                        <div className={`w-12 h-6 rounded-full transition ${settings.privacy.showContact ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                          <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.privacy.showContact ? 'left-7' : 'left-1'}`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200'} border rounded-xl p-6`}>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Kogi State Data Privacy</h4>
                <p className={`${darkMode ? 'text-green-400' : 'text-green-700'} mb-4`}>
                  Your Kogi State administrative data is protected. You can request Kogi State specific data reports.
                </p>
                <div className="flex space-x-4">
                  <button className={`px-6 py-2 rounded-lg font-medium ${darkMode ? 'bg-green-800/30 text-green-300 hover:bg-green-800/50' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>
                    Download Kogi Data
                  </button>
                  <button className={`px-6 py-2 border rounded-lg font-medium ${darkMode ? 'border-green-700 text-green-400 hover:bg-green-800/30' : 'border-green-300 text-green-700 hover:bg-green-50'}`}>
                    Kogi Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Security Settings</h3>
              
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Two-Factor Authentication</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Add Kogi State security layer</div>
                    </div>
                    <button onClick={() => handleToggle('security', 'twoFactor')} className="relative">
                      <div className={`w-12 h-6 rounded-full transition ${settings.security.twoFactor ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.security.twoFactor ? 'left-7' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Kogi Login Alerts</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Notify Kogi State admin sign-ins</div>
                    </div>
                    <button onClick={() => handleToggle('security', 'loginAlerts')} className="relative">
                      <div className={`w-12 h-6 rounded-full transition ${settings.security.loginAlerts ? 'bg-gradient-to-r from-[#006600] to-[#008800]' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform ${settings.security.loginAlerts ? 'left-7' : 'left-1'}`}></div>
                      </div>
                    </button>
                  </div>

                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'} mb-3`}>Change Password</h4>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#006600] to-[#008800] text-white rounded-lg hover:opacity-90 font-medium">
                      Update Kogi Admin Password
                    </button>
                  </div>

                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'} mb-3`}>Kogi Admin Sessions</h4>
                    <div className="space-y-3">
                      <div className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <div>
                          <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Current Session</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Chrome • Kogi State HQ</div>
                        </div>
                        <button className={`text-sm font-medium ${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-800'}`}>
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Kogi State Account</h3>
              
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="space-y-6">
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Kogi Account Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Account Status</div>
                        <div className="text-green-600 font-semibold">Active - Kogi State</div>
                      </div>
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Member Since</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>February 2024</div>
                      </div>
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Account Type</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kogi State Super Admin</div>
                      </div>
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Jurisdiction</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kogi State - All LGAs</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Kogi Account Actions</h4>
                    <div className="space-y-4">
                      <button className={`w-full text-left p-4 border rounded-lg ${darkMode ? 'border-gray-600 hover:bg-gray-700 text-orange-400' : 'border-gray-300 hover:bg-gray-50 text-orange-600'}`}>
                        <div className="font-medium">Upgrade Kogi Access</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Access premium Kogi State features</div>
                      </button>
                      <button className={`w-full text-left p-4 border rounded-lg ${darkMode ? 'border-gray-600 hover:bg-gray-700 text-green-400' : 'border-gray-300 hover:bg-gray-50 text-green-600'}`}>
                        <div className="font-medium">Export Kogi Data</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Download Kogi State specific data</div>
                      </button>
                      <button className={`w-full text-left p-4 border rounded-lg ${darkMode ? 'border-gray-600 hover:bg-gray-700 text-blue-400' : 'border-gray-300 hover:bg-gray-50 text-blue-600'}`}>
                        <div className="font-medium">Transfer Kogi Admin</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Transfer to another Kogi admin</div>
                      </button>
                      <button className={`w-full text-left p-4 border rounded-lg ${darkMode ? 'border-red-700 hover:bg-red-900/20 text-red-400' : 'border-red-300 hover:bg-red-50 text-red-600'}`}>
                        <div className="font-medium">Deactivate Kogi Account</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Temporarily disable Kogi access</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}