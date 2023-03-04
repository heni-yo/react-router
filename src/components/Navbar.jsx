import * as React from "react";
import { NavLink } from "react-router-dom";

function navBarStyles({ isActive }) {
  return { textDecoration: isActive ? "underline" : "none" };
}
const navLinkList = {};

const pages = [
  <NavLink to="/" style={navBarStyles} >
    <img src="./images/logo.svg" alt="shaif's cuisine" />
  </NavLink>,
  <NavLink  to="/" style={navBarStyles}>
    Home
  </NavLink>,
  <NavLink  to="/menu" style={navBarStyles}>
    Menu
  </NavLink>,
    <NavLink  to="/about" style={navBarStyles}>
    About
  </NavLink>,
  <NavLink  to="/contact" style={navBarStyles}>
    Contact
  </NavLink>,
  <NavLink to="/bookTable" className="btn primary-btn" style={navBarStyles}>
    Book Table
  </NavLink>,
];

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <a href="./index.html" className="logo">
            <img src="./images/logo.svg" alt="shaif's cuisine" />
          </a>
          <nav>
            <div className="nav__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </div>
            <div className="nav__bgOverlay"></div>
            <ul className="nav__list">
              <div className="nav__close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="nav__list__wrapper">
                {pages.map((page, index) => (
                  <li className="nav__link" key={index}>
                    {page}
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
