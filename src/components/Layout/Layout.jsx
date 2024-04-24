// Layout component
import React,{ useEffect, useState }  from 'react';
import { Outlet } from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Navbar2 from '../Navbar/Navbar2'; // Import the alternative Navbar
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <main style={{ paddingBottom: '200px', marginBottom: '100px' }}>
        {children}
        <Outlet />
      </main>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
