import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='container'>
      <nav className='navbar'>
        <h2>Text-Formatter</h2>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
