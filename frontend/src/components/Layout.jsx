import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#f5f6f8] text-[#1f2937] font-sans selection:bg-[#b45309] selection:text-white">
      
      {/* Global Navigation Bar */}
      <Navigation />
      
      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      
      {/* Structured Institutional Footer */}
      <footer className="bg-white border-t border-[#e5e7eb] py-14 mt-auto">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div>
            <div className="text-[#1f2937] font-bold text-xl mb-1 flex items-center justify-center md:justify-start gap-3 tracking-tight">
              Department of Chemistry
            </div>
            <p className="text-sm text-[#4b5563] max-w-sm leading-relaxed mt-2">
              Indian Institute of Technology Madras<br />
              Chennai 600036, Tamil Nadu, India
            </p>
          </div>

          <div className="text-sm text-[#4b5563] flex flex-col items-center md:items-end">
             <div className="flex gap-6 mb-4 font-medium">
               <a href="#" className="hover:text-[#b45309] transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-[#b45309] transition-colors">Terms of Use</a>
               <a href="#" className="hover:text-[#b45309] transition-colors">Sitemap</a>
               <a href="#" className="hover:text-[#b45309] transition-colors">Contact Directory</a>
             </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} IIT Madras. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;
