import Head from "next/head";
import Header from "./header";
import Logo from "./logo-ra";
import Footer from "./footer";
import ImageHeader from "./unsplash-img";
import { Link } from "../routes";

const LayoutPost = ({ children, unsplashID }) => (
  <div>
    <Header />
    <ImageHeader unsplashID={unsplashID} />
    <div className="container">
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-8 mt-5">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LayoutPost;
