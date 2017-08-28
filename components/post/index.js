import { Link } from "../../routes";
import moment from "moment/moment";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class PostItem extends Component {
  render() {
    let postDate = moment(this.props.post.sys.createdAt);
    return (
      <div>
        <Link route="post" params={{ slug: this.props.post.fields.slug }}>
          <a>
            <h2>
              {this.props.post.fields.title}
            </h2>
          </a>
        </Link>
        <span className="badge badge-light mb-4 post-date">
          {postDate.fromNow()}
        </span>
        <ReactMarkdown
          source={this.props.post.fields.body}
          className="post-body mb-5"
        />
        <style jsx>
          {`
            a {
              color: #333;
            }

            a:hover {
              color: #ff2d55;
              text-decoration: none;
            }

            /* use :global to style third-party components */
            :global(.post-body) {
              font-size: 20px;
              font-weight: 300;
              line-height: 1.6;
            }

            :global(.post-body h2, .post-body h3, .post-body h4) {
              font-family: 'Open Sans', sans-serif;
              font-weight: 700;
            }

            .post-date {
              text-transform: uppercase;
              font-weight: 400;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostItem;
