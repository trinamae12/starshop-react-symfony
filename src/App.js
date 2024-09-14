import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ShipDetails from './pages/ShipDetails';

function App() {
  return (
    <Router>
          <div className="text-white" style={{ background: 'radial-gradient(102.21% 102.21% at 50% 28.75%, #00121C 42.62%, #013954 100%)' }}>
    <div className="flex flex-col justify-between min-h-screen relative">
      <div>
          <Header />
            <Routes>
        <Route path="/" element={<MainContent />}/>
        <Route path="/starships/:id" element={<ShipDetails />} />
      </Routes>
      <Footer />
      </div>
    </div>
  </div>
    </Router>
  );
}

export default App;
