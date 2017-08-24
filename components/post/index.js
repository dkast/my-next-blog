import { Link } from "../../routes";
import moment from "moment/moment";

import React, { Component } from "react";

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
        <span className="badge badge-dark mb-4 post-date">
          {postDate.fromNow()}
        </span>
        <p>
          {this.props.post.fields.body}
        </p>
        <style jsx>
          {`
            a {
              color: #333;
            }

            a:hover {
              color: #ff2d55;
              text-decoration: none;
            }

            p {
              font-size: 16px;
              line-height: 1.5;
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
