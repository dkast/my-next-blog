import Link from "next/link";

const Header = () =>
  <div className="container my-3">
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
      </li>
    </ul>
  </div>;

export default Header;
