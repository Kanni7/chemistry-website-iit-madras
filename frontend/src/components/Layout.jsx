import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../assets/logo/IITM_LOGO.png';

const Layout = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col bg-[#f5f6f8] text-[#1f2937] font-sans selection:bg-[#b45309] selection:text-white overflow-hidden">

=======
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-gray-800 font-sans selection:bg-[#800000] selection:text-white">
      
>>>>>>> 089086b (Refine and polish Home page: stats bar, research highlights, widget accents, card hover effects, ken-burns slider)
      {/* Global Navigation Bar */}
      <Navigation />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
<<<<<<< HEAD

      {/* Structured Institutional Footer */}
      <footer className="bg-[#eef1f4] border-t border-[#e5e7eb] py-14 mt-auto">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={logo} alt="IIT Madras Logo" className="h-16 w-auto object-contain mix-blend-darken opacity-90" />
            <div>
              <div className="text-[#1f2937] font-bold text-xl mb-1 tracking-tight">
                Department of Chemistry
=======
      
      {/* --- ULTRA-COMPACT INSTITUTIONAL FOOTER --- */}
      <footer className="relative bg-gradient-to-b from-white to-[#f3f4f6] border-t border-gray-200 pt-8 pb-4 mt-auto overflow-hidden">
        
        {/* Subtle Dotted Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.2] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>

        <div className="container relative mx-auto px-6 max-w-[75rem] z-10">
          
          {/* Main 3-Column Grid with reduced vertical gaps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-6">
            
            {/* COLUMN 1: Identity */}
            <div className="flex flex-col items-start text-left">
              <img src={logo} alt="IIT Madras Logo" className="h-10 w-auto object-contain mix-blend-darken mb-3" />
              <div>
                <h2 className="text-gray-900 font-bold text-[18px] tracking-tight mb-0.5">
                  Department of Chemistry
                </h2>
                <p className="text-[13px] text-gray-500 leading-snug">
                  Indian Institute of Technology Madras<br />
                  Chennai 600036, Tamil Nadu, India
                </p>
>>>>>>> 089086b (Refine and polish Home page: stats bar, research highlights, widget accents, card hover effects, ken-burns slider)
              </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div className="flex flex-col items-start md:items-center">
              <div className="w-full md:w-auto">
                <h3 className="text-gray-900 font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                  Quick Links
                </h3>
                <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-1.5 text-[13px] text-gray-500 font-medium">
                  <li><a href="#" className="hover:text-[#800000] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#800000] transition-colors">People</a></li>
                  <li><a href="#" className="hover:text-[#800000] transition-colors">Research</a></li>
                  <li><a href="#" className="hover:text-[#800000] transition-colors">Programs</a></li>
                </ul>
              </div>
            </div>

            {/* COLUMN 3: Contact & Socials */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <h3 className="text-gray-900 font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                Get In Touch
              </h3>
              
              <div className="flex flex-col items-start md:items-end gap-1.5 text-[13px] text-gray-500 font-medium mb-4">
                <a href="mailto:cyoffice@iitm.ac.in" className="flex items-center gap-2 hover:text-[#800000] transition-colors">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>cyoffice@iitm.ac.in</span>
                </a>
                <a href="tel:+914422574200" className="flex items-center gap-2 hover:text-[#800000] transition-colors">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+91 44 2257 4200</span>
                </a>
              </div>

              <div className="flex flex-col items-start md:items-end w-full">
                <h3 className="text-gray-900 font-bold text-[10px] tracking-[0.15em] uppercase mb-2 opacity-70">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-[#800000] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836z" /></svg></a>
                  <a href="#" className="text-gray-400 hover:text-[#800000] transition-colors"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.646h2.039L6.486 3.24H4.298Z" /></svg></a>
                  <a href="#" className="text-gray-400 hover:text-[#800000] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                </div>
              </div>
            </div>

          </div>

<<<<<<< HEAD
          <div className="text-sm text-[#4b5563] flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4 font-medium">
              <a href="#" className="hover:text-[#b45309] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#b45309] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#b45309] transition-colors">Sitemap</a>
              <a href="#" className="hover:text-[#b45309] transition-colors">Contact Directory</a>
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} IIT Madras. All rights reserved.
=======
          {/* Bottom Row - Tightened spacing */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-200/60">
            <p className="text-[11px] text-gray-400 font-medium tracking-tight">
              &copy; {new Date().getFullYear()} IIT Madras Department of Chemistry. All rights reserved.
>>>>>>> 089086b (Refine and polish Home page: stats bar, research highlights, widget accents, card hover effects, ken-burns slider)
            </p>
            <div className="flex items-center gap-6 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
               <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
               <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
               <a href="#" className="hover:text-gray-600 transition-colors">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;