import Head from "next/head";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import moment from "moment/moment";
import { createClient } from "contentful";

import React, { Component } from "react";

class Post extends Component {
  static async getInitialProps(context) {
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
  }
  render() {
    let postDate = moment(this.props.post.sys.createdAt);
    return (
      <Layout>
        <Head>
          <title>
            {this.props.post.fields.title}
          </title>
        </Head>
        <h2>
          {this.props.post.fields.title}
        </h2>
        <span className="badge badge-light mb-4 post-date">
          {postDate.fromNow()}
        </span>
        <ReactMarkdown
          source={this.props.post.fields.body}
          className="post-body mb-5"
        />
        <style jsx>
          {`
            /* use :global to style third-party components */
            :global(.post-body) {
              font-size: 18px;
              line-height: 1.5;
            }

            .post-date {
              text-transform: uppercase;
              font-weight: 400;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Post;
