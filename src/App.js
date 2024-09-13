import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white" style={{ background: 'radial-gradient(102.21% 102.21% at 50% 28.75%, #00121C 42.62%, #013954 100%)' }}>
      <div className="flex flex-col justify-between min-h-screen relative">
        <div>
            <Header />
            <MainContent />
            <Footer /> 
        </div>
      </div>
    </div>
  );
}

export default App;
