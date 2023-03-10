import * as React from "react";
import { NavLink } from "react-router-dom";

function navBarStyles({ isActive }) {
  return { textDecoration: isActive ? "underline" : "none" };
}
const navLinkList = {};
const pages = [
  { to: "/", message: <img src="./images/logo.svg" alt="shaif's cuisine" /> },
  { to: "/", message: "Home" },
  { to: "/menu", message: "Menu" },
  { to: "/about", message: "About" },
  { to: "/contact", message: "Contact" },
  { to: "/bookTable", message: "Book Table" ,class:"btn primary-btn" }
];


  

function Navbar() {
  const navlist = React.useRef(null);
  const navBgOverlayEl = React.useRef(null);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <a href="./index.html" className="logo">
            <img src="./images/logo.svg" alt="shaif's cuisine" />
          </a>
          <nav>
            <div
              onClick={() => {
                navlist.current.classList.add("show");
                navBgOverlayEl.current.classList.add("active");
                document.body.style =
                  "visibility: visible; height: 100vh; width:100vw; overflow:hidden;";
              }}
              className="nav__icon"
            >
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
            <div ref={navBgOverlayEl} className="nav__bgOverlay"></div>
            <ul ref={navlist} className="nav__list">
              <div
                onClick={() => {
                  navlist.current.classList.remove("show");
                  navBgOverlayEl.current.classList.remove("active");
                  document.body.style =
                    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
                }}
                className="nav__close"
              >
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
                    <NavLink to={page.to} style={navBarStyles} className={page.class}> {page.message}</NavLink>
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
