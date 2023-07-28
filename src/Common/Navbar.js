import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/images" activeClassName="active-link">
            Images
          </NavLink>
        </li>
        <li>
          <NavLink to="/stopwatch" activeClassName="active-link">
            Stopwatch
          </NavLink>
        </li>
        <li>
          <NavLink to="/quote" activeClassName="active-link">
            Quote
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" activeClassName="active-link">
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

