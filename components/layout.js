import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-8">{children}</div>
      </div>
    </div>
    <Footer />
    <style jsx>{`
      .site-title h3 {
        font-family: "Works Sans", sans-serif;
        text-transform: uppercase;
        letter-spacing: 4px;
      }

      a,
      a:hover {
        color: #333;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Layout;
