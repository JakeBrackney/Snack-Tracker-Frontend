import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const restaurantsURL = 'http://localhost:3001/api/restaurants'

class ShowRestaurant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: []
    }
   
  }
  componentDidMount () {

    const restaurantId = this.props.match.params.id
    console.log(`${restaurantsURL}${restaurantId}`)
    const url = `${restaurantsURL}${restaurantId}`

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
      <div>
        
      </div>
    );
  }
}

export default ShowRestaurant;