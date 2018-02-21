import React, { Component } from "react";
import Head from "next/head";
import { createClient } from "contentful";
import moment from "moment/moment";
import readingTime from "reading-time";
import LayoutPost from "../components/post/layoutPost";
import TagList from "../components/post/tagList";
import RelatedPosts from "../components/post/relatedPosts";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;

    const client = createClient({
      space: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN
    });

    const post = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug
    });

    let tags;
    let relatedPosts;
    if (post.items[0].fields.hasOwnProperty(tags)) {
      tags = post.items[0].fields.tags.toString();
      relatedPosts = await client.getEntries({
        content_type: "blogPost",
        select: "fields.title,fields.slug,fields.tags,fields.unsplashId",
        "fields.tags[in]": tags,
        "sys.id[ne]": post.items[0].sys.id,
        order: "-sys.createdAt",
        limit: 3
      });
    } else {
      tags = [];
      relatedPosts = {
        items: []
      };
    }

    return {
      post: post.items[0],
      relatedPosts: relatedPosts.items
    };
  }
  render() {
    const postDate = moment(this.props.post.sys.createdAt);
    const readingStats = readingTime(this.props.post.fields.body);
    console.dir(readingStats);
    return (
      <LayoutPost unsplashId={this.props.post.fields.unsplashId}>
        <Head>
          <title>{this.props.post.fields.title}</title>
        </Head>
        <div className="post-meta">
          <h1>{this.props.post.fields.title}</h1>
          <span className="badge badge-light mb-4 meta">
            {postDate.format("LL")}
          </span>
          <span className="badge badge-light mb-4 ml-2 meta">
            {readingStats.text}
          </span>
        </div>
        <div className="post-body mb-5">
          <ReactMarkdown source={this.props.post.fields.body} />
          <TagList tags={this.props.post.fields.tags} />
          <RelatedPosts posts={this.props.relatedPosts} />
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

            .meta {
              font-size: 0.9rem;
              font-weight: 400;
            }
          `}
        </style>
      </LayoutPost>
    );
  }
}

export default Post;
