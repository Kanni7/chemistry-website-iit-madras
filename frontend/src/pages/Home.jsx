import React from 'react';
import { BookOpen, FlaskConical, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full flex-grow flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full bg-[#1a2a3a] text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Abstract background gradient effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a2a3a] via-[#2c3e50] to-[#f39c12] opacity-30 pointer-events-none"></div>
        
        <div className="container relative z-10 animate-fade-in flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Department of Chemistry
              <span className="block text-[#f39c12] mt-2 text-3xl md:text-4xl">IIT Madras</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Pioneering research, world-class education, and interdisciplinary innovation in chemical sciences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
               <Link to="/about/overview" className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-3 px-8 text-lg transition-all rounded shadow-lg flex items-center gap-2 transform hover:-translate-y-1">
                 Discover More
               </Link>
               <Link to="/admissions/bs" className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 text-lg transition-all rounded shadow-lg border-2 border-white/30 flex items-center gap-2">
                 Admissions
               </Link>
            </div>
        </div>
      </section>

      {/* Legacy Welcome Box translation */}
      <section className="container py-16 -mt-10 relative z-20 px-4">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-[#1a2a3a] text-center max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform">
          <h2 className="text-3xl font-bold text-[#1a2a3a] mb-4">Welcome to Our Digital Portal</h2>
          <div className="text-[#666] text-lg mb-6">Explore the new architecture of our platform</div>
          <p className="text-gray-700 leading-relaxed">
            This layout serves as the root menu for all the pages in your project. Each item in the top navigation is a modern React dropdown containing routes to every specific section of the department, efficiently organizing Academics, Research, People, and Facilities.
          </p>
        </div>
      </section>

      {/* Quick Links / Highlights */}
      <section className="w-full bg-[#f4f4f9] py-16 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#1a2a3a] mb-12">Academic Excellence & Research</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="card text-center group">
              <div className="bg-[#f0f4f8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1a2a3a] transition-colors">
                <BookOpen size={30} className="text-[#1a2a3a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1a2a3a]">Programs</h3>
              <p className="text-gray-600 mb-6">Comprehensive BS, Dual Degree, MSc, and PhD programs designed to forge the next generation of scientists.</p>
              <Link to="/academics" className="text-[#e74c3c] font-semibold inline-flex items-center gap-1 hover:text-[#c0392b] transition-colors">
                View Academics <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card text-center group">
              <div className="bg-[#f0f4f8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#f39c12] transition-colors">
                <FlaskConical size={30} className="text-[#f39c12] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1a2a3a]">Research</h3>
              <p className="text-gray-600 mb-6">Cutting-edge facilities ranging from theoretical catalysis to advanced materials and energy storage.</p>
              <Link to="/research" className="text-[#e74c3c] font-semibold inline-flex items-center gap-1 hover:text-[#c0392b] transition-colors">
                Explore Research <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card text-center group">
              <div className="bg-[#f0f4f8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e74c3c] transition-colors">
                <Users size={30} className="text-[#e74c3c] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1a2a3a]">People</h3>
              <p className="text-gray-600 mb-6">A diverse community of globally recognized faculty, brilliant students, and impactful alumni.</p>
              <Link to="/people" className="text-[#e74c3c] font-semibold inline-flex items-center gap-1 hover:text-[#c0392b] transition-colors">
                Meet the Team <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
