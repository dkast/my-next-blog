import { createClient } from "contentful";
import fetch from "isomorphic-unfetch";

import Layout from "../components/layout";
import Post from "../components/post";

const Index = props =>
  <Layout>
    {props.posts.map(post => <Post key={post.sys.id} post={post} />)}
  </Layout>;

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
