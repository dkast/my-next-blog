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
    space: "vetv236gz0vr",
    accessToken:
      "bacf758fc3542068ab2ddff0188403327800751d61f9150b6991f5bb94c7cab9"
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    limit: 10
  });

  return {
    posts: res.items
  };
};

export default Index;
