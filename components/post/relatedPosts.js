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
      <div className="bg-light">
        <h2>Related Posts</h2>
        {postItemCards}
      </div>
    );
  }
}

export default RelatedPosts;
