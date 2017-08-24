import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import Logo from "./logo";

const Layout = props =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Encode+Sans:700|Hind:400,600|Open+Sans:700"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-5 site-title">
            <Link href="/">
              <a>
                <Logo />
                <h3>Hack n´ Roll</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center mt-5">
        <div className="col-lg-8">
          {props.children}
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        body {
          font-family: 'Hind', sans-serif;
        }

        h1,
        h2,
        h3,
        h5,
        h5 {
          font-family: 'Open Sans', sans-serif;
          font-weight: 700;
        }
      `}
    </style>
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
