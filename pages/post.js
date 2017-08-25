import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { createClient } from "contentful";

const Post = props =>
  <Layout>
    <h1>
      {props.post.fields.title}
    </h1>
    <p>
      {props.post.fields.body.replace(/<[/]?p>/g, "")}
    </p>
  </Layout>;

Post.getInitialProps = async function(context) {
  const { slug } = context.query;
  const client = createClient({
    space: "vetv236gz0vr",
    accessToken:
      "bacf758fc3542068ab2ddff0188403327800751d61f9150b6991f5bb94c7cab9"
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug
  });
  console.dir(res);
  return {
    post: res.items[0]
  };
};

export default Post;
