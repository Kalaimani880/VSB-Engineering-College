
import React from 'react';
import { PlacementLineChart, SalaryBarChart } from '../components/Charts';

const Placements: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Placement Records</h2>
        <p className="text-gray-600 mt-2">Consistent excellence in industry placements for over two decades.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-4">Offers Over Years</h3>
          <PlacementLineChart />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-4">Salary Package Growth (LPA)</h3>
          <SalaryBarChart />
        </div>
      </div>

      <div className="bg-blue-900 text-white p-8 rounded-2xl mb-12 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <i className="fas fa-trophy text-9xl"></i>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6">The "VSB Placement Formula"</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <span className="block text-blue-300 font-bold text-xs uppercase mb-2">Tier 1: Service</span>
              <h4 className="font-bold text-lg mb-2">Foundational MNCs</h4>
              <p className="text-sm text-gray-200">Focused training for TCS, Cognizant, and Wipro. Aptitude + Communication focus.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <span className="block text-green-300 font-bold text-xs uppercase mb-2">Tier 2: Product</span>
              <h4 className="font-bold text-lg mb-2">High Growth Tech</h4>
              <p className="text-sm text-gray-200">Intermediate DSA and competitive programming for companies like Zoho and Kaar Tech.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <span className="block text-yellow-300 font-bold text-xs uppercase mb-2">Tier 3: Super Pack</span>
              <h4 className="font-bold text-lg mb-2">Marquee Offers</h4>
              <p className="text-sm text-gray-200">Advanced Algorithmic training for global giants like Amazon and Microsoft. Packages up to 47 LPA.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-6">Top Recruiters</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['TCS', 'Cognizant', 'Wipro', 'Infosys', 'Capgemini', 'Deloitte', 'Zoho', 'Accenture', 'Amazon', 'Robert Bosch', 'Sony India', 'Hexaware'].map((company, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center font-bold text-gray-400 grayscale hover:grayscale-0 transition-all cursor-default">
                {company}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Placement CDC Schedule</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-bold text-blue-800">01</div>
              <div>
                <h4 className="font-bold text-sm">3rd Semester</h4>
                <p className="text-xs text-gray-600">Aptitude training begins.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-bold text-blue-800">02</div>
              <div>
                <h4 className="font-bold text-sm">5th Semester</h4>
                <p className="text-xs text-gray-600">Intensive coding rounds on SkillRack/HackerRank.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="font-bold text-blue-800">03</div>
              <div>
                <h4 className="font-bold text-sm">7th Semester</h4>
                <p className="text-xs text-gray-600">Mock technical interviews with industry veterans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
