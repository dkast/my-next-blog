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
        integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
        crossorigin="anonymous"
      />
    </Head>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-5">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-lg-8">
          {props.children}
        </div>
      </div>
    </div>
  </div>;

export default Layout;
