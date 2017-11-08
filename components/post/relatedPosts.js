import React, { Component } from "react";
import PostItemCard from "./postItemCard";

class RelatedPosts extends Component {
  render() {
    if (this.props.posts.lenght == 0) {
      return null;
    }
    const postItemCards = this.props.posts.map(post => (
      <PostItemCard key={post.sys.id} post={post} />
    ));
    return (
      <div className="my-5">
        <div className="card-deck">{postItemCards}</div>
      </div>
    );
  }
}

export default RelatedPosts;
