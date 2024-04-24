// components/Navbar.js
import React from 'react';
import NavLink from './NavLink';

const TopNavbar = () => {
    return (

        <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <p>
              <i className="fa fa-phone" />
              <span> Phone</span>010-020-0340
            </p>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <p>
              <i className="fa fa-envelope-o" />
              <span> Email</span>
              <a href="#">awesome@company.com</a>
            </p>
          </div>
          <div className="col-md-5 col-sm-4 col-xs-12">
            <ul className="social-icon">
              <li>
                <span>Meet us on</span>
              </li>
              <li>
                <a href="#" className="fa fa-facebook" />
              </li>
              <li>
                <a href="#" className="fa fa-twitter" />
              </li>
              <li>
                <a href="#" className="fa fa-instagram" />
              </li>
              <li>
                <a href="#" className="fa fa-apple" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      

      /*  <nav>
            <ul>

                <li>
                    <NavLink href="/faqs" text="FAQS" />
                </li>
                <li>
                    <NavLink href="/help-us" text="Help US" />
                </li>
            </ul>
        </nav> */
    );
};

export default TopNavbar;
