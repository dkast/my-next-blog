import Head from "next/head";
import Header from "./header";
import Logo from "./logo-ra";
import Footer from "./footer";
import HeaderImage from "./header-image";
import { Link } from "../routes";

const LayoutPost = ({ children, unsplashID }) => (
  <div>
    <Header />
    <HeaderImage unsplashID={unsplashID} />
    <div className="container">
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-8 mt-3 mt-md-5">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LayoutPost;
