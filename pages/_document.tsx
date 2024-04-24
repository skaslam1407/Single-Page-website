import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
        <Head>
          {/* Add your CSS file here */}
          <link rel="stylesheet" href="/styles/bootstrap.min.css" />
          <link rel="stylesheet" href="/styles/animate.min.css" />
          <link rel="stylesheet" href="/styles/font-awesome.min.css" />
          <link rel="stylesheet" href="/styles/templatemo-style.css" />
          <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'></link>
          {/* Include your JavaScript file */}
          <script src="/js/jquery.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/custom.js" />
          <script src="/js/jquery.singlePageNav.min.js" />
          <script src="/js/typed.js" />
          <script src="/js/wow.min.js" />
        </Head>
      <body id="top">
          {/* start preloader */}
            <div className="preloader">
              <div className="sk-spinner sk-spinner-wave">
                <div className="sk-rect1" />
                <div className="sk-rect2" />
                <div className="sk-rect3" />
                <div className="sk-rect4" />
                <div className="sk-rect5" />
              </div>
            </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}