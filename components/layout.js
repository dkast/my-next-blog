import Head from "next/head";
import Header from "./header";
import Logo from "./logo";
import Footer from "./footer";
import { Link } from "../routes";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="text-center site-title">
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
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-8">{children}</div>
      </div>
    </div>
    <Footer />
    <style jsx>
      {`
        a,
        a:hover {
          color: #333;
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Layout;
