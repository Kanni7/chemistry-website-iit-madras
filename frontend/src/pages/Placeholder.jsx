import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Hammer, ArrowLeft } from 'lucide-react';

const Placeholder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Create a nice title from the URL path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const pageTitle = pathParts.length > 0 
    ? pathParts[pathParts.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Page';

  return (
    <div className="container flex-grow flex items-center justify-center py-20 px-4 min-h-[60vh]">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg border border-gray-100 p-10 text-center animate-fade-in relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f39c12] opacity-10 rounded-bl-full -z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1a2a3a] opacity-5 rounded-tr-full -z-0"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-[#f0f4f8] rounded-full flex items-center justify-center mx-auto mb-6">
            <Hammer size={40} className="text-[#1a2a3a]" />
          </div>
          
          <h1 className="text-3xl font-bold text-[#1a2a3a] mb-2">{pageTitle}</h1>
          <h2 className="text-[#f39c12] text-xl font-medium mb-6">Under Construction</h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            The <strong className="text-[#1a2a3a]">{location.pathname}</strong> route has been successfully configured in the navigation architecture. This component will be built out in a future update.
          </p>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-[#333] font-medium rounded transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Go Back
            </button>
            <Link 
              to="/" 
              className="px-6 py-2 bg-[#1a2a3a] hover:bg-[#2c3e50] text-white font-medium rounded transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
