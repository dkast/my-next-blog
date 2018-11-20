import React, { Component } from "react";

class TagList extends Component {
  render() {
    if (!this.props.tags) {
      return null;
    }
    const tagItems = this.props.tags.map(tag => (
      <li className="list-inline-item" key={tag}>
        <span className="badge badge-pill badge-secondary">{tag}</span>
        <style jsx>{`
          .badge {
            font-weight: 300;
          }
        `}</style>
      </li>
    ));
    return (
      <div>
        <ul className="list-inline">{tagItems}</ul>
      </div>
    );
  }
}

export default TagList;
