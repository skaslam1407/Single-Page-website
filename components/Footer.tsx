// components/Footer.js
import React from 'react';
import FooterNavbar from './FooterNav';
const Footer = () => {
    return (
        <footer id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                className="wow bounceIn"
                data-wow-offset={50}
                data-wow-delay="0.3s"
              >
                Copyright © 2084 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>

       /* <footer>
            <div className="container">
                <FooterNavbar/>
                
            </div>
        </footer>*/
    );
};

export default Footer;
