import React from 'react';
import { BookOpen, FlaskConical, Users, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full flex-grow flex flex-col bg-white">
      
      {/* Hero Section */}
      <section className="w-full bg-[#f5f6f8] text-[#1f2937] pt-24 pb-28 px-6 text-center border-b border-[#e5e7eb]">
        <div className="container mx-auto max-w-5xl flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-[#1f2937]">
              Department of Chemistry
              <span className="block text-[#4b5563] mt-3 text-3xl md:text-4xl lg:text-4xl font-bold">
                Indian Institute of Technology Madras
              </span>
            </h1>
            <div className="w-16 h-1 bg-[#b45309] mb-8"></div>
            <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              Pioneering research, world-class education, and interdisciplinary innovation in chemical sciences at India's premier institute.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4">
               <Link to="/about/overview" className="bg-[#b45309] hover:bg-[#92400e] text-white font-semibold py-3.5 px-8 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm">
                 Discover More
               </Link>
               <Link to="/academics" className="bg-white hover:bg-[#f5f6f8] text-[#1f2937] font-semibold py-3.5 px-8 transition-colors border border-[#e5e7eb] flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm">
                 Academic Programs
               </Link>
            </div>
        </div>
      </section>

      {/* Overview Metric Banner */}
      <section className="container mx-auto px-6 py-16 border-b border-[#e5e7eb]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="text-center md:text-left flex-1 border-r-0 md:border-r border-[#e5e7eb] md:pr-10">
             <h2 className="text-2xl font-bold text-[#1f2937]">At a Glance</h2>
             <p className="text-[#4b5563] mt-2 font-medium">A leading hub for chemical research and education.</p>
          </div>
          <div className="flex gap-12 lg:gap-20 flex-wrap justify-center flex-1">
             <div className="text-center">
               <div className="text-4xl font-extrabold text-[#1f2937]">50+</div>
               <div className="text-xs font-bold text-[#4b5563] uppercase tracking-widest mt-2">Faculty Members</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-extrabold text-[#1f2937]">4</div>
               <div className="text-xs font-bold text-[#4b5563] uppercase tracking-widest mt-2">Research Centers</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-extrabold text-[#1f2937]">100s</div>
               <div className="text-xs font-bold text-[#4b5563] uppercase tracking-widest mt-2">Yearly Publications</div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="w-full py-20 px-6 bg-[#ffffff]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-[#1f2937] mb-4">Focus Areas</h2>
            <div className="w-16 h-[3px] bg-[#b45309]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#f5f6f8] p-8 border border-[#e5e7eb] hover:border-[#b45309] transition-colors group">
              <BookOpen size={28} className="text-[#1f2937] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-3 text-[#1f2937]">Academic Programs</h3>
              <p className="text-[#4b5563] mb-6 text-sm leading-relaxed">BS, Dual Degree, MSc, and PhD programs designed to forge the next generation of scientists.</p>
              <Link to="/academics" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:text-[#92400e] transition-colors">
                View Curriculum <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f5f6f8] p-8 border border-[#e5e7eb] hover:border-[#b45309] transition-colors group">
              <FlaskConical size={28} className="text-[#1f2937] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-3 text-[#1f2937]">Research Facilities</h3>
              <p className="text-[#4b5563] mb-6 text-sm leading-relaxed">State-of-the-art facilities ranging from theoretical catalysis to advanced materials and energy storage.</p>
              <Link to="/research" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:text-[#92400e] transition-colors">
                Explore Research <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f5f6f8] p-8 border border-[#e5e7eb] hover:border-[#b45309] transition-colors group">
              <Users size={28} className="text-[#1f2937] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-3 text-[#1f2937]">Our Community</h3>
              <p className="text-[#4b5563] mb-6 text-sm leading-relaxed">A diverse and vibrant community of globally recognized faculty, brilliant students, and notable alumni.</p>
              <Link to="/people" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:text-[#92400e] transition-colors">
                Meet the Team <ArrowRight size={16} />
              </Link>
            </div>
            
             {/* Card 4 */}
             <div className="bg-[#f5f6f8] p-8 border border-[#e5e7eb] hover:border-[#b45309] transition-colors group">
              <Globe size={28} className="text-[#1f2937] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-3 text-[#1f2937]">Global Collaborations</h3>
              <p className="text-[#4b5563] mb-6 text-sm leading-relaxed">Fostering strong partnerships with national and international universities and industry alliances.</p>
              <Link to="/collaborations/international" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] hover:text-[#92400e] transition-colors">
                View Partnerships <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
