import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  return (
        <nav className='navigation'>
         <div className='logo'>
          <NavLink to="/" style={{ color: 'white',textDecoration: 'none'  }}>Homepage</NavLink>
          </div>
         <div className='authentication'>
            <div className='login'>
                Login
            </div>
            <div className='sign_up'>
                Create Account
            </div>
         </div>
        </nav>
  )
}

export default Navbar