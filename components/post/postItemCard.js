import React, { Component } from "react";

class PostItemCard extends Component {
  render() {
    return <div>{this.props.post.fields.title}</div>;
  }
}

export default PostItemCard;
