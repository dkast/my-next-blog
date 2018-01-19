import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { Link } from "../routes";
import { Twitter, Instagram, Github } from "react-feather";
import Logo from "./logo-svg";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ title = "Daniel Castillejo" }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link href="/static/shards.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Hind:300,400,600"
        rel="stylesheet"
      />
      <title>{title}</title>
    </Head>
    <style jsx global>
      {`
        html {
          position: relative;
          min-height: 100%;
        }

        body {
          font-family: "Hind", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          margin-bottom: 76px;
        }

        h1,
        h2,
        h3,
        h5,
        h5 {
          font-family: "Hind", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          font-weight: 600;
        }

        /* loading progress bar styles */
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #651fff;
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
          box-shadow: 0 0 10px #651fff, 0 0 5px #651fff;
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-8">
          <div className="navbar navbar-expand-lg">
            <Link route="index">
              <a className="navbar-brand mr-auto">
                <Logo width="36px" height="36px" />
              </a>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link route="about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <ul className="nav justify-content-end">
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
        </ul> */}
    </div>
    <style jsx>
      {`
        .navbar {
          padding: 0.5rem 0;
        }

        .nav-item a {
          font-weight: bold;
          color: #333;
        }

        .nav-item a:hover {
          color: #555;
        }
      `}
    </style>
  </div>
);

export default Header;
