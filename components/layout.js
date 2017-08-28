import Head from "next/head";
import Header from "./header";
import Logo from "./logo";
import { Link } from "../routes";

const Layout = props =>
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-5 site-title">
            <Link route="index">
              <a>
                <Logo />
                <h3>Hack n´ Roll</h3>
              </a>
            </Link>
          </div>
          <p className="text-center text-muted">by Daniel Castillejo</p>
        </div>
      </div>
      <div className="row justify-content-md-center mt-5">
        <div className="col-lg-8">
          {props.children}
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .site-title {
          font-family: 'Encode Sans', sans-serif;
          text-transform: uppercase;
        }

        a,
        a:hover {
          color: #333;
          text-decoration: none;
        }
      `}
    </style>
  </div>;

export default Layout;
