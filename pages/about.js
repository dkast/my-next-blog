import Layout from "../components/layout";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";

const About = props => (
  <Layout>
    <ReactMarkdown source={props.page.fields.body} className="page-body mb-5" />
    <style jsx>
      {`
        /* use :global to style third-party components */
        :global(.page-body) {
          font-size: 20px;
          font-weight: 300;
          line-height: 1.6;
        }

        :global(.page-body h2, .page-body h3, .page-body h4) {
          font-family: "Open Sans", sans-serif;
          font-weight: 700;
        }
      `}
    </style>
  </Layout>
);

About.getInitialProps = async function() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const res = await client.getEntries({
    content_type: "page",
    "fields.menuId": "about"
  });

  console.dir(res);
  return {
    page: res.items[0]
  };
};

export default About;
