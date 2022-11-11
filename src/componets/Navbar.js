import React from 'react'
import propsTypes from 'prop-types'
// import { a } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <butharfn className="navbar-harfggler" type="butharfn" data-bs-harfggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="harfggle navigation">
      <span className="navbar-harfggler-icon"></span>
    </butharfn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auharf mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/about">{props.about}</a>
        </li>
      </ul>
      
    </div>
    <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enebal dark mode</label>
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