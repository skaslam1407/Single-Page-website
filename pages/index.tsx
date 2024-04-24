import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Page() {
    return( <>
    <Header/>
    <>
  {/* start home */}
  <section id="home">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <h1 className="wow fadeIn" data-wow-offset={50} data-wow-delay="0.9s">
            We make templates that are <span>awesome</span>
          </h1>
          <div className="element">
            <div className="sub-element">Hello, this is Typed.js</div>
            <div className="sub-element">
              Awesome Template is provided by templatemo.com website for
              everyone
            </div>
            <div className="sub-element">
              Download, edit and apply this awesome template for your websites
            </div>
          </div>
          <a
            data-scroll=""
            href="#about"
            className="btn btn-default wow fadeInUp"
            data-wow-offset={50}
            data-wow-delay="0.6s"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end home */}
  {/* start about */}
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2
            className="wow bounceIn"
            data-wow-offset={50}
            data-wow-delay="0.3s"
          >
            WE ARE <span>AWESOME</span>
          </h2>
        </div>
        <div
          className="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="media">
            <div className="media-heading-wrapper">
              <div className="media-object pull-left">
                <i className="fa fa-mobile" />
              </div>
              <h3 className="media-heading">FULLY RESPONSIVE</h3>
            </div>
            <div className="media-body">
              <p>
                Awesome responsive template is provided by{" "}
                <a
                  rel="nofollow"
                  href="http://www.templatemo.com"
                  target="_parent"
                >
                  templatemo
                </a>{" "}
                website. This is Bootstrap v3.3.2 layout built on HTML5 CSS3.
                You can use this for any purpose. Please tell your friends about
                it.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-4 col-xs-12 wow fadeInUp"
          data-wow-offset={50}
          data-wow-delay="0.9s"
        >
          <div className="media">
            <div className="media-heading-wrapper">
              <div className="media-object pull-left">
                <i className="fa fa-comment-o" />
              </div>
              <h3 className="media-heading">FREE SUPPORT</h3>
            </div>
            <div className="media-body">
              <p>
                Credits go to{" "}
                <a rel="nofollow" href="http://pixabay.com">
                  Pixabay
                </a>{" "}
                for homepage image and{" "}
                <a rel="nofollow" href="http://unsplash.com">
                  Unsplash
                </a>{" "}
                for portfolio images. Lorem ipsum dolor sit amet, consectetur
                adipiscing elitquisque tempus ac eget diam et laoreet phasellus
                ut nisi id leo molestie.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-4 col-xs-12 wow fadeInRight"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="media">
            <div className="media-heading-wrapper">
              <div className="media-object pull-left">
                <i className="fa fa-html5" />
              </div>
              <h3 className="media-heading">HTML5 &amp; CSS3</h3>
            </div>
            <div className="media-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget diam et laoreet phasellus ut nisi id leo
                molestie. Adipiscing vitae vel quam proin eget mauris eget.
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about */}
  {/* start team */}
  <section id="team">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2
            className="wow bounceIn"
            data-wow-offset={50}
            data-wow-delay="0.3s"
          >
            <span>AWESOME</span> TEAM
          </h2>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="1.3s"
        >
          <div className="team-wrapper">
            <img
              src="images/team-img1.jpg"
              className="img-responsive"
              alt="team img 1"
            />
            <div className="team-des">
              <h4>TRACY</h4>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="1.6s"
        >
          <div className="team-wrapper">
            <img
              src="images/team-img2.jpg"
              className="img-responsive"
              alt="team img 2"
            />
            <div className="team-des">
              <h4>MARY</h4>
              <span>Developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="1.3s"
        >
          <div className="team-wrapper">
            <img
              src="images/team-img3.jpg"
              className="img-responsive"
              alt="team img 3"
            />
            <div className="team-des">
              <h4>JULIA</h4>
              <span>Director</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="1.6s"
        >
          <div className="team-wrapper">
            <img
              src="images/team-img4.jpg"
              className="img-responsive"
              alt="team img 4"
            />
            <div className="team-des">
              <h4>LINDA</h4>
              <span>Manager</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget diam et laoreet phasellus ut nisi id leo molest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end team */}
  {/* start service */}
  <section id="service">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2
            className="wow bounceIn"
            data-wow-offset={50}
            data-wow-delay="0.3s"
          >
            OUR <span>AWESOME</span> THINGS
          </h2>
        </div>
        <div
          className="col-md-4 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <i className="fa fa-laptop" />
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
            tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
            Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elitquisque tempus ac eget diam et
            laoreet phasellus ut nisi id leo molestie.
          </p>
        </div>
        <div
          className="col-md-4 active wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.9s"
        >
          <i className="fa fa-cloud" />
          <h4>Cloud Computing</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
            tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
            Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elitquisque tempus ac eget diam et
            laoreet phasellus ut nisi id leo molestie.
          </p>
        </div>
        <div
          className="col-md-4 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <i className="fa fa-cog" />
          <h4>UX Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
            tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
            Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elitquisque tempus ac eget diam et
            laoreet phasellus ut nisi id leo molestie.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* end servie */}
  {/* start portfolio */}
  <section id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2
            className="wow bounceIn"
            data-wow-offset={50}
            data-wow-delay="0.3s"
          >
            <span>AWESOME</span> PORTFOLIO
          </h2>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img1.jpg"
              className="img-responsive"
              alt="portfolio img 1"
            />
            <div className="portfolio-overlay">
              <h4>Project One</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img2.jpg"
              className="img-responsive"
              alt="portfolio img 2"
            />
            <div className="portfolio-overlay">
              <h4>Project Two</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img3.jpg"
              className="img-responsive"
              alt="portfolio img 3"
            />
            <div className="portfolio-overlay">
              <h4>Project Three</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img4.jpg"
              className="img-responsive"
              alt="portfolio img 4"
            />
            <div className="portfolio-overlay">
              <h4>Project Four</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img3.jpg"
              className="img-responsive"
              alt="portfolio img 3"
            />
            <div className="portfolio-overlay">
              <h4>Project Five</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img4.jpg"
              className="img-responsive"
              alt="portfolio img 4"
            />
            <div className="portfolio-overlay">
              <h4>Project Six</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img1.jpg"
              className="img-responsive"
              alt="portfolio img 1"
            />
            <div className="portfolio-overlay">
              <h4>Project Seven</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <div className="portfolio-thumb">
            <img
              src="images/portfolio-img2.jpg"
              className="img-responsive"
              alt="portfolio img 2"
            />
            <div className="portfolio-overlay">
              <h4>Project Eight</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                tempus ac eget dia.
              </p>
              <a href="#" className="btn btn-default">
                DETAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end portfolio */}
  {/* start contact */}
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2
            className="wow bounceIn"
            data-wow-offset={50}
            data-wow-delay="0.3s"
          >
            CONTACT <span>AWESOME</span>
          </h2>
        </div>
        <div
          className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft"
          data-wow-offset={50}
          data-wow-delay="0.9s"
        >
          <form action="#" method="post">
            <label>NAME</label>
            <input
              name="fullname"
              type="text"
              className="form-control"
              id="fullname"
            />
            <label>EMAIL</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
            />
            <label>MESSAGE</label>
            <textarea
              name="message"
              rows={4}
              className="form-control"
              id="message"
              defaultValue={""}
            />
            <input type="submit" className="form-control" />
          </form>
        </div>
        <div
          className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight"
          data-wow-offset={50}
          data-wow-delay="0.6s"
        >
          <address>
            <p className="address-title">OUR ADDRESS</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
              tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.
            </span>
            <p>
              <i className="fa fa-phone" /> 010-020-0340
            </p>
            <p>
              <i className="fa fa-envelope-o" /> awesome@company.com
            </p>
            <p>
              <i className="fa fa-map-marker" /> 663 New Walk Roadside, Birdeye
              View, GO 11020
            </p>
          </address>
          <ul className="social-icon">
            <li>
              <h4>WE ARE SOCIAL</h4>
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
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* end contact */}
</>

    <Footer/>
    
    </>)
  }