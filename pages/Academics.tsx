
import React from 'react';

const Academics: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Academic Excellence</h2>
        <p className="text-gray-600 mt-2">Nurturing technical expertise through a technology-driven pedagogy.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-800 mb-1">~248</p>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Faculty Members</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-800 mb-1">20:1</p>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Student Ratio</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-800 mb-1">253</p>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">University Ranks</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h3 className="text-xl font-bold mb-6">Department Highlights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-900 mb-2">Computer Science & Engineering (CSE)</h4>
              <p className="text-sm text-gray-600">28 dedicated faculty specializing in Database, Data Mining, and AI. High research output.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-900 mb-2">Electronics & Communication (ECE)</h4>
              <p className="text-sm text-gray-600">Led by senior professors, focusing on journal publications and real-time project implementation.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-900 mb-2">Mechanical & Civil</h4>
              <p className="text-sm text-gray-600">State-of-the-art workshops and labs. Consistent 100% placement for Mechanical batch.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Pedagogy & Infrastructure</h3>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="fas fa-chalkboard text-blue-800 mt-1"></i>
                <span className="text-sm text-blue-900 italic">"ICT-enabled classrooms and smart boards for interactive learning sessions."</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-microchip text-blue-800 mt-1"></i>
                <span className="text-sm text-blue-900">Licensed access to MATLAB, Xilinx, ETAP, and ANSYS.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-vial text-blue-800 mt-1"></i>
                <span className="text-sm text-blue-900">3D Printing Lab and IoT Incubation Center for TNSCST projects.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-network-wired text-blue-800 mt-1"></i>
                <span className="text-sm text-blue-900">1 Gbps dedicated leased line for campus-wide high-speed Wi-Fi.</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 flex gap-4">
            <div className="flex-1 p-4 bg-white border border-gray-200 rounded-xl">
              <p className="text-2xl font-bold text-blue-900">3.5★</p>
              <p className="text-xs text-gray-500 font-bold">IIC Innovation Rating</p>
            </div>
            <div className="flex-1 p-4 bg-white border border-gray-200 rounded-xl">
              <p className="text-2xl font-bold text-blue-900">100+</p>
              <p className="text-xs text-gray-500 font-bold">Annual Research Papers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-6 text-center">Technical & Professional Societies</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white px-6 py-4 rounded-full shadow-sm font-bold text-blue-800 flex items-center gap-2">
            <i className="fas fa-shield-alt"></i> CSI Chapter
          </div>
          <div className="bg-white px-6 py-4 rounded-full shadow-sm font-bold text-blue-800 flex items-center gap-2">
            <i className="fas fa-microchip"></i> IEEE Student Chapter
          </div>
          <div className="bg-white px-6 py-4 rounded-full shadow-sm font-bold text-blue-800 flex items-center gap-2">
            <i className="fas fa-cogs"></i> ISTE Section
          </div>
          <div className="bg-white px-6 py-4 rounded-full shadow-sm font-bold text-blue-800 flex items-center gap-2">
            <i className="fas fa-robot"></i> Robotics Club
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
