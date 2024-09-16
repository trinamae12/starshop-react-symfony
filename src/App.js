import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ShipDetails from './pages/ShipDetails';

function App() {
  const [ships, setShips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  const fetchShips = async(page = 1) => {
    setLoading(true);
    try {
        const response = await fetch(`https://localhost/api/starships?page=${page}&limit=5`);
        const result = await response.json();
        setShips(result.data);
        setTotalPages(result.meta.totalPages);
        setCurrentPage(result.meta.currentPage);
        setLoading(false);
    } catch (err) {
        console.log(err);
        setLoading(false);
    }
}

  const handleSearch = (query = '') => {
    if(query === '') {
        fetchShips();
    }
    setLoading(true);
    try {
        fetch(`https://localhost/api/starships/search?name=${query}`)
        .then((response) => response.json())
        .then((data) => {
                setShips(data.data);
                setTotalPages(data.meta.totalPages);
                setCurrentPage(data.meta.currentPage);
                setLoading(false);
            });
    } catch(e) {
        console.log(e);
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchShips();

    return () => {
        controller.abort();
    }
}, []);

useEffect(() => {
    fetchShips(currentPage)
}, [currentPage]);

const handlePageChange = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
  }
}

  return (
    <Router>
          <div className="text-white" style={{ background: 'radial-gradient(102.21% 102.21% at 50% 28.75%, #00121C 42.62%, #013954 100%)' }}>
    <div className="flex flex-col justify-between min-h-screen relative">
      <div>
          <Header handleSearch={handleSearch}/>
            <Routes>
        <Route path="/" 
              element={
                <MainContent 
                  ships={ships} 
                  handlePageChange={handlePageChange} 
                  loading={loading}
                  currentPage={currentPage}
                  totalPages={totalPages} 
                />}
              />
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
