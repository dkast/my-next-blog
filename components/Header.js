import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { Link } from "../routes";
import { Twitter, Instagram, Github } from "react-feather";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ title = "Random Access" }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Works+Sans:500:700|Hind:300,400,600"
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
          font-family: "Hind", sans-serif;
          margin-bottom: 60px;
        }

        h1,
        h2,
        h3,
        h5,
        h5 {
          font-family: "Works Sans", sans-serif;
          font-weight: 700;
        }

        /* loading progress bar styles */
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #333;
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
          box-shadow: 0 0 10px #333, 0 0 5px #333;
          opacity: 1;
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
    <style jsx>
      {`
        .nav-item a {
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
