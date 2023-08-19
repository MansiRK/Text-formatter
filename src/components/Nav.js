import React from 'react'
import "./Nav.css"
import PropTypes from 'prop-types'

//Passing props
function Nav(props) {
  return (
    <div className='container'>
      <nav className='navbar'>
        <h2>Text-Formatter</h2>
        <ul className='nav-links'>
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

// PropTypes:
// making object 
// giving types
Nav.propTypes = 
{
  home: PropTypes.string.isRequired,
  about: PropTypes.string
}

// If prop is not passed then this are the default props
Nav.defaultProps = {
  title: "Set title here",
  about: "Set about text here"
}


export default Nav
