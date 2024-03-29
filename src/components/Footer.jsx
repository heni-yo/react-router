import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__col1">
            <div className="footer__logo">
              <img src="./images/logo.svg" alt="shaif's cuisine" />
            </div>
            <p className="footer__desc">
              Fresh and delicious traditional Bangladeshi food to delight the
              whole family.
            </p>
            <div className="footer__socials">
              <h4 className="footer__socials__title">Follow us</h4>
              <ol className="footer__socials__list">
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="footer__col2">
            <h3 className="footer__text__title">Links</h3>
            <ol className="footer__text">
              <li>
                <a href="/index.html">Home</a>
              </li>
              <li>
                <a href="./menu.html">Menu</a>
              </li>
              <li>
                <a href="./booking.html">Book Table</a>
              </li>
              <li>
                <a href="./about.html">About Us</a>
              </li>
              <li>
                <a href="./contact.html">contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ol>
          </div>
          <div className="footer__col3">
            <h3 className="footer__text__title">Support</h3>
            <ol className="footer__text">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ol>
          </div>
          <div className="footer__col4">
            <h3 className="footer__text__title">Contact</h3>
            <ol className="footer__text">
              <li>
                <a href="#">+880123</a>
              </li>
              <li>
                <a href="#">webcifar@gmail.com</a>
              </li>
              <li>
                <a href="#">GEC Circle, Chittagong, Bangladesh</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="container">
          <p className="copyright__text">
            © copyright 2021 Shaif’s Cuisine | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
