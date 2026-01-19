
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold mb-6 border border-blue-400/30">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
            ADMISSIONS OPEN 2026-27
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hard Work is the <br/><span className="text-blue-300 underline decoration-4 underline-offset-8">Key to Success</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
            Empowering the next generation of engineers through rigorous discipline, industry-led training, and a record-breaking 100% placement goal.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95">
              Explore Admissions
            </button>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-blue-200">Highest Package</p>
                <p className="text-2xl font-bold">47 LPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Ticker & News */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Live News */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <i className="fas fa-bullhorn text-blue-700"></i>
                  Latest Announcements
                </h3>
                <span className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">View All</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 group cursor-pointer hover:bg-blue-100 transition-all">
                  <div className="text-xs font-bold text-blue-500 mb-1 uppercase">Event • Feb 25</div>
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-700 transition-colors">Annual Symposium 'VSB-TECH 2026'</h4>
                  <p className="text-xs text-blue-800/70 mt-1 line-clamp-2">The most awaited technical fest of the year is back with 20+ events.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-100 group cursor-pointer hover:bg-green-100 transition-all">
                  <div className="text-xs font-bold text-green-500 mb-1 uppercase">Placement • Feb 12</div>
                  <h4 className="font-bold text-green-900 group-hover:text-green-700 transition-colors">AWS Recruitment Drive 2026</h4>
                  <p className="text-xs text-green-800/70 mt-1 line-clamp-2">Amazon Web Services begins hiring for Cloud Support roles next week.</p>
                </div>
              </div>
            </div>
            {/* Quick Stats Ticker */}
            <div className="lg:w-1/3">
              <div className="bg-gray-900 rounded-2xl p-6 text-white h-full shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Campus Live Status
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-3xl font-bold">1401</p>
                    <p className="text-xs text-gray-500 font-medium">Offers Placed (2024 Batch)</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-800 pt-4">
                    <div className="flex-1">
                      <p className="text-xl font-bold">201-300</p>
                      <p className="text-[10px] text-gray-500">NIRF 2025 Rank</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-bold">47 LPA</p>
                      <p className="text-[10px] text-gray-500">Peak Salary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 tracking-tight">Academic Legacy & Discipline</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2000 by Mr. V.S. Balsamy, VSB Engineering College has grown into a premier autonomous institution. We follow a unique "School-like Discipline" model that ensures consistent academic results and professional readiness.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10">
              Our 32-acre lush green campus is not just a place of learning but a hub for innovation, holding various NBA and NAAC accreditations that testify to our global standards.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-800 flex-shrink-0 shadow-sm">
                  <i className="fas fa-award text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">NAAC B++</h4>
                  <p className="text-gray-500 text-xs">Quality Accredited</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-800 flex-shrink-0 shadow-sm">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Green Campus</h4>
                  <p className="text-gray-500 text-xs">Nature First</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1523050853064-dbad3507016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Students" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">V</div>
                <div>
                  <p className="text-sm font-bold text-blue-900 italic">"The Best Humanitarian Award"</p>
                  <p className="text-[10px] text-gray-500">Mr. V.S. Balsamy, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
