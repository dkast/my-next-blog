import Layout from "../components/layout";
import { Link } from "../routes";
import fetch from "isomorphic-unfetch";
import { createClient } from "contentful";

const Index = props =>
  <Layout>
    <h1>Posts</h1>
    <ul>
      {props.posts.map(post =>
        <li key={post.sys.id}>
          <Link route="post" params={{ slug: post.fields.slug }}>
            <a>
              {post.fields.title}
            </a>
          </Link>
        </li>
      )}
    </ul>
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
