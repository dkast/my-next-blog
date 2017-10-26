import { Twitter, Instagram, Github } from "react-feather";

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-4 order-lg-1 order-2">
          <div className="d-flex justify-content-center justify-content-lg-start">
            <span className="text-muted">
              Created by Daniel Castillejo. Built with Next.js.
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-4 order-lg-2 order-1">
          <ul className="nav justify-content-center justify-content-lg-end">
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
        .footer {
          position: absolute;
          width: 100%;
          height: 76px;
          line-height: 76px;
          bottom: 0;
          font-size: 14px;
        }

        .nav-item a {
          font-weight: bold;
          color: #868e96;
        }

        .nav-item a:hover {
          color: #7c4dff;
        }
      `}
    </style>
  </footer>
);
