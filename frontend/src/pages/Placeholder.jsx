import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings } from 'lucide-react';

const Placeholder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Format the URL path into a readable title
  const pathParts = location.pathname.split('/').filter(Boolean);
  const pageTitle = pathParts.length > 0 
    ? pathParts[pathParts.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Page Overview';

  return (
    <div className="w-full flex-grow flex items-center justify-center py-20 px-6 min-h-[60vh] bg-[#f5f6f8]">
      <div className="max-w-xl w-full bg-white border border-[#e5e7eb] p-10 md:p-14 text-center shadow-sm">
        
        <div className="flex flex-col items-center">
          <Settings size={40} className="text-[#1f2937] mb-6 opacity-80" strokeWidth={1.5} />
          
          <h1 className="text-3xl font-bold text-[#1f2937] mb-2">{pageTitle}</h1>
          
          <div className="text-[#b45309] font-bold text-sm uppercase tracking-wider mb-6">
            Under Maintenance
          </div>
          
          <p className="text-[#4b5563] mb-10 max-w-sm mx-auto leading-relaxed text-base font-medium">
            The requested section <span className="font-mono bg-[#f5f6f8] text-[#1f2937] px-2 py-1 text-sm border border-[#e5e7eb]">{location.pathname}</span> is currently being structured and will be available shortly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => navigate(-1)} 
              className="px-6 py-3.5 bg-white text-[#1f2937] font-semibold transition-colors border border-[#e5e7eb] hover:bg-[#f5f6f8] flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} /> Previous Page
            </button>
            <Link 
              to="/" 
              className="px-6 py-3.5 bg-[#1f2937] hover:bg-[#111827] text-white font-semibold transition-colors border border-[#1f2937]"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
