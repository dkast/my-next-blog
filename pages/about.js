import Layout from "../components/layout";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";
import ProgresBar from "../components/progressBar";

const About = props => (
  <Layout>
    <ReactMarkdown source={props.page.fields.body} className="page-body mb-5" />
    <div className="row justify-content-md-between">
      <div className="col-md-5 mb-3">
        <h3>Knowledge</h3>
        <ul className="list-unstyled">
          <li>
            <span>.NET</span>
            <ProgresBar percentage="85" />
          </li>
          <li>
            <span>React/React Native</span>
            <ProgresBar percentage="70" />
          </li>
          <li>
            <span>Javascript (ES6)</span>
            <ProgresBar percentage="80" />
          </li>
          <li>
            <span>HTML & CSS</span>
            <ProgresBar percentage="100" />
          </li>
          <li>
            <span>Nativescript</span>
            <ProgresBar percentage="85" />
          </li>
          <li>
            <span>Progress OpenEdge</span>
            <ProgresBar percentage="95" />
          </li>
        </ul>
      </div>
      <div className="col-md-5 mb-3">
        <h3>Skillset</h3>
        <ul className="list-unstyled">
          <li>Fullstack Developer</li>
          <li>DevOps</li>
          <li>Project Manager</li>
          <li>UI & UX</li>
          <li>Cross-platform/Native Developer</li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        /* use :global to style third-party components */
        :global(.page-body) {
          font-size: 20px;
          font-weight: 300;
          line-height: 1.6;
        }

        :global(.page-body h1, .page-body h2, .page-body h3, .page-body h4) {
          font-weight: 400;
        }

        h2,
        h3 {
          font-weight: 400;
        }

        li {
          margin-bottom: 1rem;
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
