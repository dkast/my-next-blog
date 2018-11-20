import { createClient } from "contentful";
import fetch from "isomorphic-unfetch";

import Layout from "../components/layout";
import PostItem from "../components/post/postItem";

const Index = props => (
  <Layout>
    <style jsx>{`
      .intro {
        margin-bottom: 4rem;
      }

      h1 {
        font-weight: 400;
      }

      h2,
      h3 {
        font-weight: 300;
      }
    `}</style>
    <div className="row">
      <div className="col-12 intro">
        <h2>Hello, I'm Daniel Castillejo.</h2>
        <h3 className="text-muted">
          Software developer, design enthusiast and music lover.
        </h3>
      </div>
      <div className="col-12 mb-2">
        <h4 className="text-muted">This is my Blog.</h4>
      </div>
    </div>
    {props.posts.map(post => (
      <PostItem key={post.sys.id} post={post} />
    ))}
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
