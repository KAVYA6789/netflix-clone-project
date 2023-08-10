import React from 'react';
import { NavLink} from 'react-router-dom'
import "./Nav.css";
import logo from "./netflix-logo-png-2562.png"



function Nav() {
  return (
    <div className="nav">
        <ul> 
            <li><img
        className="nav__logo"
        src={logo}
         alt="Netflix.logo"
        /></li>
        <li>
        <NavLink to="/TvShows" className="nav__item">
          TvShows
        </NavLink>
        <NavLink to="/Movies" className="nav__link">
          Movies
        </NavLink>
        <NavLink to="/" className="nav__link">
          Logout
        </NavLink>
        </li>
        </ul>
        
    </div>
  )
}

export default Nav;
