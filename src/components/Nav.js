import React from 'react'
import "./Nav.css"
import PropTypes from 'prop-types'

//Passing props
function Nav(props) {

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text-Formatter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-2 mb-2 mb-lg-0 align-items-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
  home: "Set Home title here",
  about: "Set about text here"
}


export default Nav
