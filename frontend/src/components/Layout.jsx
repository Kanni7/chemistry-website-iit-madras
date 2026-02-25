import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f9]">
      {/* Global Navigation Bar */}
      <Navigation />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Optional Global Footer could go here later */}
      <footer className="bg-[#1a2a3a] text-white py-6 text-center mt-12">
        <div className="container mx-auto">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Chemistry Department, IIT Madras. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
