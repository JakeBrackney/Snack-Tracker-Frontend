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
      <li>
        <i>{ this.state.comment.dateVisited }</i> - { this.state.comment.content }
      </li>
    );
  }
}

export default Comment;