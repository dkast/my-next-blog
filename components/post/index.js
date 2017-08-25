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

            .post-body p {
              font-size: 18px;
              line-height: 1.5;
              color: red;
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
//
// const PostItem = ({ post }) =>
//   <div>
//     <Link route="post" params={{ slug: post.fields.slug }}>
//       <a>
//         <h2 className="mb-4">
//           {post.fields.title}
//         </h2>
//       </a>
//     </Link>
//     <small>
//       {post.sys.createdAt}
//     </small>
//     <p>
//       {post.fields.body.replace(/<[/]?p>/g, "")}
//     </p>
//     <style jsx>
//       {`
//         a {
//           color: #333;
//         }
//
//         a:hover {
//           color: #ff2d55;
//           text-decoration: none;
//         }
//
//         p {
//           font-size: 16px;
//           line-height: 1.5;
//         }
//       `}
//     </style>
//   </div>;
//
// export default PostItem;
