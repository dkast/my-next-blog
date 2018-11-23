import Header from "../header";
import Footer from "../footer";
import HeaderImage from "./headerImage";

const LayoutPost = ({ children, unsplashId }) => (
  <div>
    <Header />
    <HeaderImage unsplashId={unsplashId} />
    <div className="container">
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-8 mt-3 mt-md-5">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LayoutPost;
