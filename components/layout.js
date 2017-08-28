<<<<<<< HEAD
import Link from "next/link";
=======
import Head from "next/head";
import { Link } from "../routes";
>>>>>>> 099c87ea1e05dd237147859eced037997da47672
import Header from "./header";
import Logo from "./logo";

const Layout = props =>
  <div>
    <Header />
    <div className="container">
      <div className="row">
<<<<<<< HEAD
        <div className="col-12 mb-5">
          <div className="text-center site-title">
            <Link href="/">
=======
        <div className="col-12">
          <div className="text-center mb-5 site-title">
            <Link route="index">
>>>>>>> 099c87ea1e05dd237147859eced037997da47672
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
