
import React from 'react';

const CampusLife: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Life at VSB</h2>
        <p className="text-gray-600 mt-2">A disciplined environment fostering academic excellence and personal growth.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-hotel text-blue-800"></i>
            Hostel Facilities
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm">
              Separate hostels for boys and girls with shared occupancy (3-4 students). Rooms include steel cots, shelves, tables, and attached restrooms.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fas fa-check-circle text-green-500"></i> RO Purified Water
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fas fa-check-circle text-green-500"></i> CCTV Surveillance
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fas fa-check-circle text-green-500"></i> Medical Facilities
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <i className="fas fa-check-circle text-green-500"></i> Recreation Hall
              </li>
            </ul>
            <div className="bg-orange-50 p-4 border-l-4 border-orange-400 rounded">
              <h4 className="font-bold text-orange-900 text-sm mb-1">Mobile Policy</h4>
              <p className="text-xs text-orange-800">
                Phones are surrendered to the warden and given only during "Phone Hour" (9:30 PM - 10:30 PM) for communication home.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://picsum.photos/600/350" alt="Hostel" className="rounded-2xl shadow-lg border border-gray-100" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="order-2 md:order-1">
          <img src="https://picsum.photos/600/350?2" alt="Mess" className="rounded-2xl shadow-lg border border-gray-100" />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-utensils text-blue-800"></i>
            Food & Mess
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm">
              Steam cookers and sterilized equipment ensure high hygiene standards. A balanced diet with non-veg options on Sundays (Biryani) and Wednesdays (Parotta).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block font-bold text-xs text-gray-400 mb-1 uppercase tracking-wider">Sunday Lunch</span>
                <span className="text-sm font-semibold text-gray-800">Chicken Biryani</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="block font-bold text-xs text-gray-400 mb-1 uppercase tracking-wider">Wednesday Dinner</span>
                <span className="text-sm font-semibold text-gray-800">Parotta & Chicken Gravy</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic">
              Student feedback is recorded in "Food Quality" notebooks for continuous improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-12 rounded-3xl">
        <h3 className="text-2xl font-bold mb-8 text-center">Strict Ethical Standards & Discipline</h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i className="fas fa-user-tie"></i>
            </div>
            <h4 className="font-bold mb-2">Clean-Look Rule</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Boys must arrive clean-shaven every single day. Growing beards or stubble is strictly prohibited.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i className="fas fa-tshirt"></i>
            </div>
            <h4 className="font-bold mb-2">Formal Dress Code</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Shirts tucked in, black leather shoes with black socks. Girls wear churidars with pinned dupattas.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i className="fas fa-language"></i>
            </div>
            <h4 className="font-bold mb-2">English Zone</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              To prepare for MNC interviews, the campus is a mandatory English Zone for all staff and students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
