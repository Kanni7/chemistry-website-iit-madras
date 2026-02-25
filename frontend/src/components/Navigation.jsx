import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Plus, Minus } from 'lucide-react';
import logo from '../assets/logo/IITM_LOGO.png';

// Structured Navigation Data Configuration
const NAVIGATION_DATA = [
  {
    title: 'About',
    path: null,
    groups: [
       {
         heading: null,
         links: [
           { label: 'Overview', to: '/about/overview' },
           { label: 'Message From Head', to: '/about/message-from-head' },
           { label: 'Vision & Mission', to: '/about/vision-mission' },
           { label: 'Achievements', to: '/about/achievements' },
           { label: 'Rankings', to: '/about/rankings' },
           { label: 'History', to: '/about/history' },
         ]
       },
       {
         heading: 'Administration',
         links: [
           { label: 'Advisory Board', to: '/about/advisory-board' },
           { label: 'Committees', to: '/about/committees' },
           { label: 'Annual Reports', to: '/about/annual-reports' },
         ]
       },
       {
         heading: 'IITM Specific',
         links: [
           { label: 'Industry Partnerships', to: '/about/industry-partnerships' },
           { label: 'Research Park Link', to: '/about/research-park-link' },
         ]
       }
    ]
  },
  {
    title: 'Academics',
    path: '/academics',
    groups: [
      {
        heading: 'Undergraduate',
        links: [
          { label: 'BS Chemistry', to: '/academics/undergraduate/bs-chemistry' },
          { label: 'Dual Degree', to: '/academics/undergraduate/dual-degree' },
          { label: 'Curriculum', to: '/academics/undergraduate/curriculum' },
          { label: 'Course Structure', to: '/academics/undergraduate/course-structure' },
          { label: 'Minor in Chemistry', to: '/academics/undergraduate/minor' },
        ]
      },
      {
        heading: 'Postgraduate',
        links: [
           { label: 'MSc Program', to: '/academics/postgraduate/msc' },
           { label: 'PhD Program', to: '/academics/postgraduate/phd' },
           { label: 'Eligibility', to: '/academics/postgraduate/eligibility' },
           { label: 'Handbook', to: '/academics/postgraduate/handbook' },
        ]
      },
      {
        heading: 'Courses',
        links: [
           { label: 'Core Courses', to: '/academics/courses/core' },
           { label: 'Elective Courses', to: '/academics/courses/elective' },
           { label: 'Lab Courses', to: '/academics/courses/lab' },
           { label: 'Course Catalog', to: '/academics/courses/catalog' },
        ]
      },
      {
        heading: 'Interdisciplinary',
        links: [
           { label: 'Chemistry + AI', to: '/academics/interdisciplinary/ai' },
           { label: 'Chemistry + Materials', to: '/academics/interdisciplinary/materials' },
           { label: 'Chemistry + Energy', to: '/academics/interdisciplinary/energy' },
           { label: 'Chemistry + Bio', to: '/academics/interdisciplinary/bio' },
        ]
      },
      {
        heading: 'Resources',
        links: [
           { label: 'Academic Calendar', to: '/academics/calendar' },
           { label: 'Timetable', to: '/academics/timetable' },
           { label: 'Regulations', to: '/academics/regulations' },
        ]
      }
    ]
  },
  {
    title: 'Research',
    path: '/research',
    groups: [
      {
         heading: 'Overview & Output',
         links: [
           { label: 'Publications', to: '/research/publications' },
           { label: 'Patents', to: '/research/patents' },
           { label: 'Funded Projects', to: '/research/funded-projects' },
           { label: 'Research Facilities', to: '/research/facilities' },
           { label: 'Industry Collaboration', to: '/research/industry-collaboration' },
         ]
      },
      {
         heading: 'Research Areas',
         links: [
           { label: 'Inorganic', to: '/research/areas/inorganic' },
           { label: 'Organic', to: '/research/areas/organic' },
           { label: 'Physical', to: '/research/areas/physical' },
           { label: 'Theoretical', to: '/research/areas/theoretical' },
           { label: 'Materials Chemistry', to: '/research/areas/materials' },
         ]
      },
      {
         heading: 'Specialized Fields',
         links: [
           { label: 'Catalysis', to: '/research/areas/catalysis' },
           { label: 'Energy Storage', to: '/research/areas/energy-storage' },
           { label: 'Computational Chemistry', to: '/research/areas/computational' },
           { label: 'Nanoscience', to: '/research/areas/nanoscience' },
         ]
      },
      {
         heading: 'Centers',
         links: [
           { label: 'Energy Center', to: '/research/centers/energy' },
           { label: 'Materials Center', to: '/research/centers/materials' },
           { label: 'Sustainability Center', to: '/research/centers/sustainability' },
         ]
      }
    ]
  },
  {
    title: 'People',
    path: null,
    groups: [
      {
        heading: 'Faculty',
        links: [
           { label: 'Inorganic', to: '/people/faculty/inorganic' },
           { label: 'Organic', to: '/people/faculty/organic' },
           { label: 'Physical', to: '/people/faculty/physical' },
           { label: 'Emeritus', to: '/people/faculty/emeritus' },
           { label: 'Visiting', to: '/people/faculty/visiting' },
        ]
      },
      {
        heading: 'Staff & Postdocs',
        links: [
           { label: 'Staff', to: '/people/staff' },
           { label: 'Postdocs', to: '/people/postdocs' },
        ]
      },
      {
         heading: 'Students',
         links: [
           { label: 'BS Students', to: '/people/students/bs' },
           { label: 'MSc Students', to: '/people/students/msc' },
           { label: 'PhD Students', to: '/people/students/phd' },
           { label: 'Project Students', to: '/people/students/project' },
         ]
      },
      {
         heading: 'Alumni',
         links: [
           { label: 'Alumni Directory', to: '/people/alumni' },
         ]
      }
    ]
  },
  {
    title: 'Admissions',
    path: null,
    groups: [
      {
         heading: 'Programs',
         links: [
           { label: 'BS Admission', to: '/admissions/bs' },
           { label: 'MSc Admission', to: '/admissions/msc' },
           { label: 'PhD Admission', to: '/admissions/phd' },
           { label: 'International Admission', to: '/admissions/international' },
         ]
      },
      {
         heading: 'Information',
         links: [
           { label: 'FAQ', to: '/admissions/faq' },
           { label: 'Brochure', to: '/admissions/brochure' },
         ]
      }
    ]
  },
  {
    title: 'Explore More',
    path: null,
    groups: [
      {
        heading: 'Seminars & Events',
        links: [
           { label: 'Upcoming', to: '/seminars/upcoming' },
           { label: 'Past', to: '/seminars/past' },
           { label: 'Distinguished Lectures', to: '/seminars/distinguished' },
        ]
      },
      {
        heading: 'Facilities',
        links: [
           { label: 'Teaching Labs', to: '/facilities/teaching-labs' },
           { label: 'Research Labs', to: '/facilities/research-labs' },
        ]
      },
      {
         heading: 'Placements & Outreach',
         links: [
           { label: 'Placement Statistics', to: '/placements/statistics' },
           { label: 'Internships', to: '/placements/internships' },
           { label: 'School Programs', to: '/outreach/school-programs' },
           { label: 'Workshops', to: '/outreach/workshops' },
         ]
      },
      {
         heading: 'Contact',
         links: [
           { label: 'Contact Us / Directory', to: '/contact/contact-us' },
         ]
      }
    ]
  }
];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setOpenMobileAccordion(null);
  }, [location]);

  // Handle Desktop Hover Dynamics
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // slight delay to make moving to dropdowns easier
  };

  // Handle Mobile Accordion toggle
  const toggleMobileAccordion = (title) => {
    setOpenMobileAccordion(openMobileAccordion === title ? null : title);
  };

  // === Desktop Components ===
  const NavButton = ({ title, isActive }) => (
    <button className={`relative inline-flex items-center font-medium text-[15px] py-7 px-4 border-none bg-transparent cursor-pointer transition-colors duration-150 ${isActive ? 'text-[#b45309]' : 'text-[#1f2937] hover:text-[#b45309]'}`}>
      {title} 
      <ChevronDown size={14} className={`ml-1.5 transition-transform duration-200 ${isActive ? 'rotate-180 text-[#b45309]' : 'text-[#4b5563]'}`} />
      {/* Active State Bottom Border Indicator */}
      {isActive && (
        <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#b45309]" aria-hidden="true" />
      )}
    </button>
  );

  const MegaMenu = ({ navItem, isActive }) => {
    // Determine dynamic column count based on number of groups. Max width constraints ensure elegant wrapping.
    const colCount = Math.min(navItem.groups.length, 4);
    
    return (
      <div className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border border-[#e5e7eb] shadow-lg rounded-md transition-all duration-200 origin-top z-50 overflow-hidden ${isActive ? 'opacity-100 visible scale-y-100 translate-y-0' : 'opacity-0 invisible scale-y-95 pointer-events-none -translate-y-2'}`}>
        
        {/* Strict Grid Layout for Academic Density */}
        <div 
          className="grid gap-x-10 gap-y-8 py-8 px-10"
          style={{ gridTemplateColumns: `repeat(${colCount}, minmax(200px, 1fr))` }}
        >
          {navItem.groups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-3">
              {group.heading && (
                <div className="text-xs font-bold text-[#4b5563] uppercase tracking-wider mb-1">
                  {group.heading}
                </div>
              )}
              <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to} 
                      className="inline-block text-[#4b5563] text-[15px] hover:text-[#b45309] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Optional Main Link Ribbon */}
        {navItem.path && (
           <div className="bg-[#f5f6f8] border-t border-[#e5e7eb] px-10 py-4 flex justify-end">
             <Link to={navItem.path} className="text-[14px] font-semibold text-[#1f2937] hover:text-[#b45309] transition-colors flex items-center gap-1">
               Go to {navItem.title} Overview <span aria-hidden="true">&rarr;</span>
             </Link>
           </div>
        )}
      </div>
    );
  };

  // === Mobile Components ===
  const MobileAccordion = ({ navItem }) => {
    const isOpen = openMobileAccordion === navItem.title;
    
    return (
      <div className="border-b border-[#e5e7eb]">
        <button 
          onClick={() => toggleMobileAccordion(navItem.title)}
          className="w-full flex items-center justify-between py-4 px-6 text-left text-[#1f2937] font-semibold focus:outline-none"
        >
          {navItem.title}
          {isOpen ? <Minus size={18} className="text-[#4b5563]" /> : <Plus size={18} className="text-[#4b5563]" />}
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}>
           <div className="px-6 space-y-6">
             {navItem.path && (
               <Link to={navItem.path} className="block text-[#b45309] font-semibold text-sm pt-2">
                 {navItem.title} Overview &rarr;
               </Link>
             )}
             
             {navItem.groups.map((group, index) => (
                <div key={index} className="space-y-3">
                  {group.heading && (
                    <div className="text-xs font-bold text-[#4b5563] uppercase tracking-wider pb-1">
                      {group.heading}
                    </div>
                  )}
                  <ul className="space-y-4">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.to} className="block text-[#4b5563] text-sm hover:text-[#b45309] transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
             ))}
           </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-white sticky top-0 border-b border-[#e5e7eb] relative z-[1000] shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between h-20">
           {/* Logo Image */}
           <Link to="/" className="flex items-center gap-3">
             <img 
               src={logo} 
               alt="IIT Madras Chemistry Department"
               className="h-[48px] w-auto object-contain"
             />
           </Link>
           
           {/* Mobile Menu Toggle Button */}
           <button 
            type="button"
            className="lg:hidden p-2 text-[#4b5563] hover:text-[#1f2937] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open primary menu"
          >
            <Menu size={28} />
          </button>

          {/* Desktop Navigation Links Container */}
          <div className="hidden lg:flex lg:items-center lg:gap-3 h-full relative">
            
            <Link 
              to="/" 
              className="inline-flex items-center font-medium text-[15px] py-7 px-4 text-[#1f2937] hover:text-[#b45309] transition-colors duration-150"
            >
              Home
            </Link>

            {/* Loop through strictly structured JSON to build Nav */}
            {NAVIGATION_DATA.map((navItem) => {
              const isActive = activeDropdown === navItem.title;
              return (
                <div 
                  key={navItem.title}
                  className="h-full static xl:relative group" /* Static on lg allows mega menu to align center of screen, relative on xl aligns below button */
                  onMouseEnter={() => handleMouseEnter(navItem.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavButton title={navItem.title} isActive={isActive} />
                  <MegaMenu navItem={navItem} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- Mobile Drawer Navigation (Architecturally Isolated) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[2000] lg:hidden">
           {/* Backdrop Overlay */}
           <div 
             className="fixed inset-0 bg-black/40 transition-opacity" 
             onClick={() => setIsMobileMenuOpen(false)}
             aria-hidden="true"
           ></div>
           
           {/* Slider Drawer */}
           <div className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#f5f6f8] shadow-2xl flex flex-col h-full transform transition-transform duration-300 translate-x-0 overflow-hidden">
             
             {/* Mobile Drawer Header */}
             <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e7eb] bg-white">
               <span className="text-[#1f2937] font-bold uppercase tracking-widest text-sm">Menu</span>
               <button 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="text-[#4b5563] hover:text-[#1f2937] p-1 transition-colors"
               >
                 <X size={24} />
               </button>
             </div>

             {/* Scrollable Accordion Content */}
             <div className="flex-1 overflow-y-auto w-full bg-white">
               <Link 
                 to="/" 
                 className="block text-[#1f2937] font-semibold py-4 px-6 border-b border-[#e5e7eb]"
               >
                 Home
               </Link>

               {NAVIGATION_DATA.map((navItem) => (
                 <MobileAccordion key={navItem.title} navItem={navItem} />
               ))}
               
             </div>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
