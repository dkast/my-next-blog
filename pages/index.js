import { createClient } from "contentful";
import fetch from "isomorphic-unfetch";

import Layout from "../components/layout";
import Post from "../components/post";

const Index = props => (
  <Layout>
    <style jsx>
      {`
        .intro h1 {
          font-weight: 400;
        }

        .intro h2 {
          font-weight: 300;
        }
      `}
    </style>
    <div className="row">
      <div className="col-12 intro">
        <h1>Hello, I'm Daniel Castillejo.</h1>
        <h2 className="mb-5">
          Software developer, design enthusiast and music lover.
        </h2>
        <h2 className="mb-4 text-muted">This is my Blog.</h2>
      </div>
    </div>
    {props.posts.map(post => <Post key={post.sys.id} post={post} />)}
  </Layout>
);

Index.getInitialProps = async function() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    limit: 10,
    order: "-sys.createdAt"
  });

  return {
    posts: res.items
  };
};

export default Index;
