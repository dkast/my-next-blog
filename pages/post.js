import Head from "next/head";
import LayoutPost from "../components/layout-post";
import TagList from "../components/tag-list";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import moment from "moment/moment";
import { createClient } from "contentful";
import React, { Component } from "react";

class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;

    const client = createClient({
      space: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN
    });

    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug
    });

    return {
      post: res.items[0]
    };
  }
  render() {
    const postDate = moment(this.props.post.sys.createdAt);
    console.log();
    return (
      <LayoutPost unsplashID={this.props.post.fields.unsplashId}>
        <Head>
          <title>{this.props.post.fields.title}</title>
        </Head>
        <div className="post-meta">
          <h1>{this.props.post.fields.title}</h1>
          <span className="badge badge-light mb-4 post-date">
            {postDate.fromNow()}
          </span>
        </div>
        <div className="post-body mb-5">
          <ReactMarkdown source={this.props.post.fields.body} />
          <TagList tags={this.props.post.fields.tags} />
        </div>
        <style jsx>
          {`
            /* use :global to style third-party components */
            :global(.post-body) {
              font-size: 20px;
              font-weight: 300;
              line-height: 1.6;
            }

            :global(.post-body h2, .post-body h3, .post-body h4) {
              font-weight: 600;
            }

            .post-date {
              text-transform: uppercase;
              font-weight: 400;
            }
          `}
        </style>
      </LayoutPost>
    );
  }
}

export default Post;
