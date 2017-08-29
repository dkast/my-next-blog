import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { Link } from "../routes";
import { Twitter, Instagram, Github } from "react-feather";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ title = "Hack n' Roll" }) =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Encode+Sans:700|Hind:300,400,600|Open+Sans:700"
        rel="stylesheet"
      />
      <title>
        {title}
      </title>
    </Head>
    <style jsx global>
      {`
        body {
          font-family: 'Hind', sans-serif;
        }

        h1,
        h2,
        h3,
        h5,
        h5 {
          font-family: 'Open Sans', sans-serif;
          font-weight: 700;
        }

        /* loading progress bar styles */
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #26d0ce;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #26d0ce, 0 0 5px #26d0ce;
          opacity: 1.0;
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
    <div className="container my-3">
      <div className="row justify-content-around">
        <div className="col-4">
          <ul className="nav">
            <li className="nav-item">
              <Link route="about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a href="https://twitter.com/dkast" className="nav-link">
                <Twitter />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com/dkast" className="nav-link">
                <Instagram />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/dkast" className="nav-link">
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>;

export default Header;
