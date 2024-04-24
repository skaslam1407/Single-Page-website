// components/Navbar.js
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <>
  {/* start navigation */}
  <nav className="navbar navbar-default templatemo-nav" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
        </button>
        <a href="#" className="navbar-brand">
          Awesome
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#top">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#team">TEAM</a>
          </li>
          <li>
            <a href="#service">SERVICE</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* end navigation */}
</>



       /* <nav>
            <ul>
                <li>
                    <NavLink href="/" text="Home" />
                </li>
                <li>
                    <NavLink href="/about" text="About Us" />
                </li>
                <li>
                    <NavLink href="/service" text="Services" />
                </li>
                <li>
                    <NavLink href="/gallery" text="Gallery" />
                </li>
                <li>
                    <NavLink href="/contact" text="Contact Us" />
                </li>
            </ul>
        </nav>*/
    );
};

export default Navbar;
