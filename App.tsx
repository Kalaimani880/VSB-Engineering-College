
import React, { useState } from 'react';
import { Page } from './types';
import AIChatBot from './components/AIChatBot';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import CampusLife from './pages/CampusLife';
import Academics from './pages/Academics';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home />;
      case Page.ADMISSIONS: return <Admissions />;
      case Page.PLACEMENTS: return <Placements />;
      case Page.CAMPUS_LIFE: return <CampusLife />;
      case Page.ACADEMICS: return <Academics />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentPage(Page.HOME)}>
              <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <div className="hidden sm:block">
                <h1 className="text-blue-900 font-bold text-lg leading-none">VSB</h1>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Engineering College</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Overview', value: Page.HOME },
                { label: 'Admissions', value: Page.ADMISSIONS },
                { label: 'Placements', value: Page.PLACEMENTS },
                { label: 'Campus Life', value: Page.CAMPUS_LIFE },
                { label: 'Academics', value: Page.ACADEMICS },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setCurrentPage(item.value)}
                  className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                    currentPage === item.value ? 'text-blue-800 border-b-2 border-blue-800 h-16' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden flex items-center">
              <select 
                value={currentPage}
                onChange={(e) => setCurrentPage(e.target.value as Page)}
                className="bg-gray-100 border-none rounded px-2 py-1 text-sm focus:ring-0"
              >
                <option value={Page.HOME}>Home</option>
                <option value={Page.ADMISSIONS}>Admissions</option>
                <option value={Page.PLACEMENTS}>Placements</option>
                <option value={Page.CAMPUS_LIFE}>Life</option>
                <option value={Page.ACADEMICS}>Academics</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded text-blue-900 flex items-center justify-center font-bold">V</div>
              <span className="font-bold text-xl tracking-tight">VSB Karur</span>
            </div>
            <p className="text-gray-400 text-sm">
              An Autonomous Institution affiliated with Anna University. Excellence through hard work.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage(Page.ADMISSIONS)}>TNEA Cut-offs</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage(Page.PLACEMENTS)}>Placement Records</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage(Page.CAMPUS_LIFE)}>Hostel Rules</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>NH - 67, Covai Road, Karur</li>
              <li>Tamil Nadu - 639 111</li>
              <li>Phone: +91 4324 252122</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Accreditation</h4>
            <div className="flex gap-4">
              <div className="bg-white/10 p-2 rounded text-xs font-bold">NAAC B++</div>
              <div className="bg-white/10 p-2 rounded text-xs font-bold">NBA</div>
              <div className="bg-white/10 p-2 rounded text-xs font-bold">ISO 9001</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VSB Engineering College. All rights reserved.
        </div>
      </footer>

      {/* AI Chatbot Overlay */}
      <AIChatBot />
    </div>
  );
};

export default App;
