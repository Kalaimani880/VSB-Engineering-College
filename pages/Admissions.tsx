
import React from 'react';
import { DepartmentIntakeChart } from '../components/Charts';

const Admissions: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Admission Process 2026-2027</h2>
        <p className="text-gray-600 mt-2">Join one of the top engineering institutions in Tamil Nadu.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-800 text-white rounded-lg flex items-center justify-center text-xl mb-4">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Eligibility</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Candidates must have passed 10+2 with 45%-50% marks in Physics, Chemistry, and Mathematics (PCM).
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-800 text-white rounded-lg flex items-center justify-center text-xl mb-4">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Seat Distribution</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>65% Govt Quota:</strong> Based on TNEA counseling. <br/>
            <strong>35% Management:</strong> Filled based on TN Govt norms.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-800 text-white rounded-lg flex items-center justify-center text-xl mb-4">
            <i className="fas fa-wallet"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Fees Estimate</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            UG (B.E/B.Tech): ~₹55,000 to ₹87,500/year. <br/>
            Hostel: ₹45,000 to ₹75,000/year.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Seat Matrix */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-chart-pie text-blue-800"></i>
            Seat Matrix 2025-2026
          </h3>
          <DepartmentIntakeChart />
        </div>

        {/* Cut-offs */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-list-ol text-blue-800"></i>
            TNEA 2025 Closing Ranks
          </h3>
          <div className="space-y-4">
            {[
              { dept: 'Computer Science & Engineering', rank: '38,585' },
              { dept: 'Information Technology', rank: '52,657' },
              { dept: 'Electronics & Communication', rank: '55,297' },
              { dept: 'Electrical & Electronics', rank: '85,774' },
              { dept: 'CS and Business Systems', rank: '86,140' },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="font-medium text-gray-800">{item.dept}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">~{item.rank}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h4 className="font-bold text-blue-900 mb-2">Scholarship Info</h4>
            <p className="text-sm text-blue-800">
              First Graduate scholarship reduces tuition by ~₹27,000. SC/ST students often receive full scholarships. Merit scholarships are available for TNEA cut-offs above 190.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
