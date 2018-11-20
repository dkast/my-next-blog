import React, { Component } from "react";
import { Link } from "../../routes";
import moment from "moment/moment";

class PostItemCard extends Component {
  render() {
    const postDate = moment(this.props.post.sys.createdAt);
    let imageTop = null;
    if (this.props.post.fields.unsplashId) {
      imageTop = (
        <img
          src={`https://source.unsplash.com/${
            this.props.post.fields.unsplashId
          }/400x200`}
          className="card-img-top"
        />
      );
    }
    return (
      <div className="card">
        {imageTop}
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            Also tagged {this.props.post.fields.tags.toString()}
          </h6>
          <Link route="post" params={{ slug: this.props.post.fields.slug }}>
            <a>
              <h4>{this.props.post.fields.title}</h4>
            </a>
          </Link>
          <div className="card-text">
            <small className="text-muted">
              Posted on {postDate.format("LL")}
            </small>
          </div>
        </div>
        <style jsx>{`
          a {
            color: #333;
          }

          a:hover {
            color: #7c4dff;
            text-decoration: none;
          }

          h6 {
            font-weight: 300;
          }

          .card {
            max-width: 25rem;
          }
        `}</style>
      </div>
    );
  }
}

export default PostItemCard;
