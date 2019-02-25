import React, { Component } from 'react';
import './UpdateComment.css'

class UpdateComment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: props.comment
    };
    this.handleUpdateComment = this.handleUpdateComment.bind(this)
  }

  handleUpdateComment() {
    const commentId = this.props.match.params.id
    const url = `${CLIENT_URL}${commentId}`
    const comment = this.state.comment;
    restaurant.newComment = this.state.newComment
    restaurant.dateVisited = new Date().toString()

    const self = this;
    axios.put(url, comment)
      .then((res) => {
        console.log(res.data)
        self.setState({
          comment: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  render() {

    return (
      <div>
          <form className='editComment'>
            <input type='text' value={this.props.comment}></input>
            <button onClick={this.handleUpdateComment}>Submit</button>
          </form>
      </div>
    );
  }
}

export default UpdateComment;