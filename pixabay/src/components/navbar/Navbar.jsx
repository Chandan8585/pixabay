import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
        <nav className='navigation'>
         <div className='logo'>Homepage</div>
         <div className='authentication'>
            <div className='login'>
                Login
            </div>
            <div className='Create Account'>
                Create Account
            </div>
         </div>
        </nav>
  )
}

export default Navbar