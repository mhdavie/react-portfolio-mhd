import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return ( 
      <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div className="text-light">
            <h4 className="nav-title-font">Mariana Davie</h4>
          </div>
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li classNames="nav-item">
            <NavLink to="/about" >
              <div className="nav-font title-font">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="active_class_link">
              <div className="nav-font title-font">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact"  className="active_class_link">
              <div className="nav-font title-font">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume"    className="active_class_link">
              <div className="nav-font title-font">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
} 

export default Navigation;