import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './ShowRestaurant.css'
import Comment from '../Comment/Comment'
import { CLIENT_URL } from '../../constants'


class ShowRestaurant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {
        comments: []
      }
    }
   this.handleDelete = this.handleDelete.bind(this)
   this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleDelete() {
    const restaurantId = this.props.match.params.id
    const url = `${CLIENT_URL}${restaurantId}`
    axios.delete(url)
      .then((res) => {
        console.log(res.data)
        this.setState({
          restaurant: [],
          newComment: ""
        })
      })
      // .then ((res) => {
      //   res.redirect('/')
      // })
      .catch((err) => {
        console.log(err)
      })
  }

  handleUpdate() {
    const restaurantId = this.props.match.params.id
    const url = `${CLIENT_URL}${restaurantId}`
    const restaurant = this.state.restaurant;
    restaurant.newComment = this.state.newComment
    restaurant.dateVisited = new Date().toString()

    var self = this;
    axios.put(url, restaurant)
      .then((res) => {
        console.log(res.data)
        self.setState({
          restaurant: res.data,
          newComment: ""
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {

    const restaurantId = this.props.match.params.id
    console.log(`${CLIENT_URL}${restaurantId}`)
    const url = `${CLIENT_URL}${restaurantId}`

    console.log("did mount in showpage")
    axios.get(url)
      .then((res) => {
        console.log(res)
        this.setState({
          restaurant: res.data
        })
        console.log(this.state.restaurant)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div key = {this.state.restaurant.id} className='restaurantCard'>
        <p className='restaurantTitle'>{this.state.restaurant.name}</p>
        <p>Date Visited: {this.state.restaurant.dateVisited}</p>
        <p>Cuisine: {this.state.restaurant.cuisine}</p>
        <p>City: {this.state.restaurant.city}</p>
        <p>Budget: {this.state.restaurant.budget}</p>
        <p>Accolades: {this.state.restaurant.accolades}</p>
        <p>Snack: {this.state.restaurant.snacks}</p>
        <p className="comments_title">Comments: </p>
        <ul className="container">
          { (this.state.restaurant.comments.length) ? this.state.restaurant.comments.map((comment, index) => {
            return <Comment comment={comment} key={index} />
          }) : null } 
        </ul>
        <div>
          New Comment: 
          <input type="text" value={this.state.newComment} onChange={ (item) => { 
            this.setState({ newComment: item.target.value }) 
            console.log(item.target.value);
            } } />
          <button onClick={this.handleUpdate}>Post</button>
        </div>
        <Link to="/">   
          <input onClick={this.handleDelete} type='submit' value='Delete' />
        </Link>
      </div>
    );
  }
}

export default ShowRestaurant;