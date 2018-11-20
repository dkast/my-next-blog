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
            <h3>{this.props.post.fields.title}</h3>
          </a>
        </Link>
        <span className="badge badge-light mb-4 meta">
          {postDate.format("LL")}
        </span>
        <ReactMarkdown
          source={this.props.post.fields.body}
          className="post-body mb-5"
        />
        <style jsx>{`
          a {
            color: #333;
          }

          a:hover {
            color: #7c4dff;
            text-decoration: none;
          }
          .meta {
            font-size: 0.9rem;
            font-weight: 400;
          }
        `}</style>
      </div>
    );
  }
}

export default PostItem;
