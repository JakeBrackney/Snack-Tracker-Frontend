import React, { Component } from 'react';
import { CLIENT_URL } from '../../constants'
import Axios from 'axios';

class Comment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: props.comment
    };
    this.handleRetrieveComment = this.handleRetrieveComment.bind(this)
  }

  handleRetrieveComment() {
    const commentId = this.props.comment.id
    const url =`${CLIENT_URL}${commentId}`
    const comment = this.state.comment;

    Axios.get(url, comment)
    .then((res) => {
      console.log("button clicked")
    })
    .catch((err) => {
      console.log(err)
    })
}


  componentWillReceiveProps(nextProps) {
    this.setState({
      comment: nextProps.comment
    })
  }

  render() {
    return (
      <li className="comment">
        <i>{ this.props.comment.content }</i> - { this.props.comment.dateVisited }
        <button onClick={this.handleRetrieveComment}>Edit</button>
      </li>

    );
  }
}

export default Comment;