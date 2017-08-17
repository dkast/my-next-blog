import Layout from "../components/layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { createClient } from "contentful";

const Index = props =>
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) =>
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>
              {show.name}
            </a>
          </Link>
        </li>
      )}
    </ul>
  </Layout>;

Index.getInitialProps = async function() {
  // const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  // const data = await res.json();
  //
  // console.log(`Show data fetched. Count: ${data.length}`);
  //
  // return {
  //   shows: data
  // };
  const client = createClient({
    space: "vetv236gz0vr",
    accessToken:
      "bacf758fc3542068ab2ddff0188403327800751d61f9150b6991f5bb94c7cab9"
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    limit: 10
  });

  console.dir(res);

  return {
    posts: res
  };
};

export default Index;
