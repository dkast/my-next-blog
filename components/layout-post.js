import Head from "next/head";
import Header from "./header";
import Logo from "./logo-ra";
import Footer from "./footer";
import { Link } from "../routes";

const LayoutPost = ({ children }) => (
  <div>
    <Header />
    <div className="row no-gutters">
      <div className="col-12">
        <img
          src="https://source.unsplash.com/collection/430468/1200x400"
          alt="hero"
          className="img-fluid"
        />
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-8 mt-2">{children}</div>
      </div>
    </div>
    <Footer />
    <style jsx>
      {`
        img {
          width: 100%;
        }
      `}
    </style>
  </div>
);

export default LayoutPost;
