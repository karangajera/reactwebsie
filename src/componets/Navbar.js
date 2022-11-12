import React from 'react'
import propsTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

// import { a } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">{props.title}</NavLink>
    <butharfn className="navbar-harfggler" type="butharfn" data-bs-harfggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="harfggle navigation">
      <span className="navbar-harfggler-icon"></span>
    </butharfn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auharf mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/About">{props.about}</NavLink>
        </li>
      </ul>
      
    </div>
    <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enebal dark mode</label>
    </div>
    <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.redtoggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enebal red mode</label>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propsTypes = {title: propsTypes.string,
                    about: propsTypes.string,};

// Navbar.defaultprop = {
//     title: 'set here',
//     about:'set about',
// };