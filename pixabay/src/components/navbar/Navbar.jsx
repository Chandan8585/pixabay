import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');

  const handleAuthClick = () => {
    // Clear user information in localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    // Update state
    setToken('');
    setUserName('');
  }

  useEffect(() => {
  
    const storedToken = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");

    // Update state
    setToken(storedToken);
    setUserName(storedUserName);

    // Set loading to false once localStorage is read
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <nav className='navigation'>
      <div className='logo'>
        <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>Homepage</NavLink>
      </div>
      <div className='authentication'>
        {token ? (
          <>
            <span className="user_logout" onClick={handleAuthClick}>
              hi {userName}
              <NavLink to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                <div className='login'>
                  Logout
                </div>
              </NavLink>
            </span>
          </>
        ) : (
          <>
            <NavLink to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              <div className='login'>
                Login
              </div>
            </NavLink>
            <NavLink to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
              <div className='sign_up'>
                Create Account
              </div>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
