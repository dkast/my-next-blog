import Link from "next/link";
import Head from "next/head";
import { Twitter, Instagram, Github } from "react-feather";

const Header = () =>
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
      `}
    </style>
    <div className="container my-3">
      <div className="row justify-content-around">
        <div className="col-4">
          <ul className="nav">
            <li className="nav-item">
              <Link href="/about">
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
