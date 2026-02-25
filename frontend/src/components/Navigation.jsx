import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Reusable Dropdown Header
  const DropdownHeader = ({ title }) => (
    <div className="text-[11px] text-[#999] uppercase tracking-wider py-2 px-4 mt-2 mb-1 bg-[#fafafa] border-b border-gray-100 font-bold">
      {title}
    </div>
  );

  // Reusable Dropdown Item
  const DropdownItem = ({ to, label }) => (
    <Link 
      to={to} 
      className="block text-[#333] py-3 px-4 text-sm no-underline border-b border-[#eee] last:border-0 hover:bg-[#f4f4f9] hover:text-[#e74c3c] hover:pl-5 transition-all duration-300"
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-[#1a2a3a] sticky top-0 z-[1000] shadow-md flex flex-wrap justify-center font-sans">
      
      {/* Home Link */}
      <Link 
        to="/" 
        className="inline-block text-white font-bold text-[15px] py-[18px] px-5 no-underline hover:bg-[#f39c12] transition-colors"
      >
        Home
      </Link>

      {/* About Section */}
      <div 
        className="relative inline-block"
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          About <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'about' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
            <DropdownItem to="/about/overview" label="Overview" />
            <DropdownItem to="/about/message-from-head" label="Message From Head" />
            <DropdownItem to="/about/vision-mission" label="Vision & Mission" />
            <DropdownItem to="/about/achievements" label="Achievements" />
            <DropdownItem to="/about/rankings" label="Rankings" />
            <DropdownItem to="/about/history" label="History" />
            <DropdownItem to="/about/advisory-board" label="Advisory Board" />
            <DropdownItem to="/about/committees" label="Committees" />
            <DropdownItem to="/about/annual-reports" label="Annual Reports" />
            <DropdownHeader title="IITM Specific" />
            <DropdownItem to="/about/industry-partnerships" label="Industry Partnerships" />
            <DropdownItem to="/about/research-park-link" label="Research Park Link" />
          </div>
        )}
      </div>

      {/* Academics Section */}
      <div 
        className="relative inline-block"
        onMouseEnter={() => handleMouseEnter('academics')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          Academics <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'academics' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownItem to="/academics" label="Academics Overview" />
             <DropdownHeader title="Undergraduate" />
             <DropdownItem to="/academics/undergraduate/bs-chemistry" label="BS Chemistry" />
             <DropdownItem to="/academics/undergraduate/dual-degree" label="Dual Degree" />
             <DropdownItem to="/academics/undergraduate/curriculum" label="Curriculum" />
             <DropdownItem to="/academics/undergraduate/course-structure" label="Course Structure" />
             <DropdownItem to="/academics/undergraduate/minor" label="Minor in Chemistry" />
             <DropdownHeader title="Postgraduate" />
             <DropdownItem to="/academics/postgraduate/msc" label="MSc Program" />
             <DropdownItem to="/academics/postgraduate/phd" label="PhD Program" />
             <DropdownItem to="/academics/postgraduate/eligibility" label="Eligibility" />
             <DropdownItem to="/academics/postgraduate/handbook" label="Handbook" />
             <DropdownHeader title="Courses" />
             <DropdownItem to="/academics/courses/core" label="Core Courses" />
             <DropdownItem to="/academics/courses/elective" label="Elective Courses" />
             <DropdownItem to="/academics/courses/lab" label="Lab Courses" />
             <DropdownItem to="/academics/courses/catalog" label="Course Catalog" />
             <DropdownHeader title="Interdisciplinary" />
             <DropdownItem to="/academics/interdisciplinary/ai" label="Chemistry + AI" />
             <DropdownItem to="/academics/interdisciplinary/materials" label="Chemistry + Materials" />
             <DropdownItem to="/academics/interdisciplinary/energy" label="Chemistry + Energy" />
             <DropdownItem to="/academics/interdisciplinary/bio" label="Chemistry + Bio" />
             <DropdownHeader title="Other" />
             <DropdownItem to="/academics/calendar" label="Academic Calendar" />
             <DropdownItem to="/academics/timetable" label="Timetable" />
             <DropdownItem to="/academics/regulations" label="Regulations" />
          </div>
        )}
      </div>

       {/* Research Section */}
       <div 
        className="relative inline-block"
        onMouseEnter={() => handleMouseEnter('research')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          Research <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'research' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownItem to="/research" label="Research Overview" />
             <DropdownItem to="/research/publications" label="Publications" />
             <DropdownItem to="/research/patents" label="Patents" />
             <DropdownItem to="/research/funded-projects" label="Funded Projects" />
             <DropdownItem to="/research/facilities" label="Research Facilities" />
             <DropdownItem to="/research/industry-collaboration" label="Industry Collaboration" />
             <DropdownHeader title="Research Areas" />
             <DropdownItem to="/research/areas/inorganic" label="Inorganic" />
             <DropdownItem to="/research/areas/organic" label="Organic" />
             <DropdownItem to="/research/areas/physical" label="Physical" />
             <DropdownItem to="/research/areas/theoretical" label="Theoretical" />
             <DropdownItem to="/research/areas/materials" label="Materials Chemistry" />
             <DropdownItem to="/research/areas/catalysis" label="Catalysis" />
             <DropdownItem to="/research/areas/energy-storage" label="Energy Storage" />
             <DropdownItem to="/research/areas/computational" label="Computational Chemistry" />
             <DropdownItem to="/research/areas/nanoscience" label="Nanoscience" />
             <DropdownHeader title="Centers" />
             <DropdownItem to="/research/centers/energy" label="Energy Center" />
             <DropdownItem to="/research/centers/materials" label="Materials Center" />
             <DropdownItem to="/research/centers/sustainability" label="Sustainability Center" />
          </div>
        )}
      </div>

       {/* People Section */}
       <div 
        className="relative inline-block"
        onMouseEnter={() => handleMouseEnter('people')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          People <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'people' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownHeader title="Faculty" />
             <DropdownItem to="/people/faculty/inorganic" label="Inorganic" />
             <DropdownItem to="/people/faculty/organic" label="Organic" />
             <DropdownItem to="/people/faculty/physical" label="Physical" />
             <DropdownItem to="/people/faculty/emeritus" label="Emeritus" />
             <DropdownItem to="/people/faculty/visiting" label="Visiting" />
             <DropdownItem to="/people/staff" label="Staff" />
             <DropdownItem to="/people/postdocs" label="Postdocs" />
             <DropdownHeader title="Students" />
             <DropdownItem to="/people/students/bs" label="BS Students" />
             <DropdownItem to="/people/students/msc" label="MSc Students" />
             <DropdownItem to="/people/students/phd" label="PhD Students" />
             <DropdownItem to="/people/students/project" label="Project Students" />
             <DropdownItem to="/people/alumni" label="Alumni" />
          </div>
        )}
      </div>

       {/* Admissions Section */}
       <div 
        className="relative inline-block"
        onMouseEnter={() => handleMouseEnter('admissions')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          Admissions <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'admissions' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownItem to="/admissions/bs" label="BS Admission" />
             <DropdownItem to="/admissions/msc" label="MSc Admission" />
             <DropdownItem to="/admissions/phd" label="PhD Admission" />
             <DropdownItem to="/admissions/international" label="International Admission" />
             <DropdownItem to="/admissions/faq" label="FAQ" />
             <DropdownItem to="/admissions/brochure" label="Brochure" />
          </div>
        )}
      </div>

      {/* Adding the remaining ones as quick dropdowns for layout */}
      <div className="relative inline-block" onMouseEnter={() => handleMouseEnter('seminars')} onMouseLeave={handleMouseLeave}>
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          Seminars <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'seminars' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownItem to="/seminars/upcoming" label="Upcoming Seminars" />
             <DropdownItem to="/seminars/past" label="Past Seminars" />
             <DropdownItem to="/seminars/distinguished" label="Distinguished Lectures" />
             <DropdownItem to="/seminars/colloquium" label="Colloquium" />
          </div>
        )}
      </div>

       <div className="relative inline-block" onMouseEnter={() => handleMouseEnter('facilities')} onMouseLeave={handleMouseLeave}>
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          Facilities <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'facilities' && (
          <div className="absolute left-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownItem to="/facilities/teaching-labs" label="Teaching Labs" />
             <DropdownItem to="/facilities/research-labs" label="Research Labs" />
             <DropdownItem to="/facilities/instrumentation" label="Central Instrumentation" />
          </div>
        )}
      </div>

       <div className="relative inline-block" onMouseEnter={() => handleMouseEnter('more')} onMouseLeave={handleMouseLeave}>
        <button className="inline-flex items-center text-white font-bold text-[15px] py-[18px] px-5 border-none bg-transparent cursor-pointer font-inherit hover:bg-[#f39c12] transition-colors">
          More <ChevronDown size={16} className="ml-1 opacity-70" />
        </button>
        {activeDropdown === 'more' && (
          <div className="absolute right-0 bg-white min-w-[200px] shadow-lg z-10 border-t-[3px] border-[#f39c12] rounded-b-md animate-fade-in">
             <DropdownHeader title="Placements" />
             <DropdownItem to="/placements/statistics" label="Statistics" />
             <DropdownItem to="/placements/internships" label="Internships" />
             <DropdownHeader title="Outreach" />
             <DropdownItem to="/outreach/school-programs" label="School Programs" />
             <DropdownItem to="/outreach/workshops" label="Workshops" />
             <DropdownHeader title="Contact" />
             <DropdownItem to="/contact/contact-us" label="Contact Us" />
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navigation;
