import React, { Component } from 'react';

class Comment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: props.comment
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comment: nextProps.comment
    })
  }

  render() {
    return (
      <li className="comment">
        <i>{ this.props.comment.dateVisited }</i> - { this.props.comment.content }
      </li>

    );
  }
}

export default Comment;