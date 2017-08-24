import Link from "next/link";

const Header = () =>
  <div className="container my-3">
    <div className="row justify-content-md-center">
      <div className="col col-lg-10">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>;

export default Header;
