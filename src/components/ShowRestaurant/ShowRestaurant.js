import React, { Component } from 'react';
import axios from 'axios'
import { Redirect} from 'react-router-dom'
import './ShowRestaurant.css'

const restaurantsURL = 'http://localhost:3001/api/restaurants/'

class ShowRestaurant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: [],
      redirect: false
    }
   this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {

    const restaurantId = this.props.match.params.id
    const url = `${restaurantsURL}${restaurantId}`
    axios.delete(url)
      .then((res) => {
        console.log(res.data)
        this.setState({
          restaurant: [],
          redirect: true
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    console.log("didMount")
   restaurantId =  this.props.deleteRestaurant
    axios.get(url).then((res => {
      this.setState({ restaurant: [],
        redirect: true})
    })
  
    // filter on id

    
    // console.log(`${restaurantsURL}${restaurantId}`)
    // const url = `${restaurantsURL}${restaurantId}`

    // console.log("did mount in showpage")
    // axios.get(url)
    //   .then((res) => {
    //     console.log(res)
    //     this.setState({
    //       restaurant: res.data
    //     })
    //     console.log(this.state.restaurant)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
   
  render() {
    console.log('showrestaurant props', this.props)
    if(this.state.redirect) {
      return (
        <Redirect to="/" />
      )
    }
    else {

      return (
        <div key = {this.state.restaurant.id} className='restaurantCard'>
        <p className='restaurantTitle'>{this.state.restaurant.name}</p>
        <p>Date Visited: {this.state.restaurant.dateVisited}</p>
        <p>Cuisine: {this.state.restaurant.cuisine}</p>
        <p>City: {this.state.restaurant.city}</p>
        <p>Budget: {this.state.restaurant.budget}</p>
        <p>Accolades: {this.state.restaurant.accolades}</p>
        <p>Notes: {this.state.restaurant.notes}</p>

        <button onClick={this.handleDelete}>Delete</button>

      </div>
    );
  }
  }
}

export default ShowRestaurant;