import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Application Layout Wrapper */}
        <Route path="/" element={<Layout />}>
          
          {/* Index Route - Home Page */}
          <Route index element={<Home />} />
          
          {/* Catch-all route mapping to the elegant Placeholder component */}
          <Route path="*" element={<Placeholder />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
