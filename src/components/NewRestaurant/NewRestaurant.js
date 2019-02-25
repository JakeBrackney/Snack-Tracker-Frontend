import React, { Component } from "react";
import axios from "axios";
import { CLIENT_URL } from "../../constants";

class NewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: []
    };
  }
  componentDidMount() {
    const restaurantId = this.props.match.params.id;
    console.log(`${CLIENT_URL}${restaurantId}`);
    const url = `${CLIENT_URL}${restaurantId}`;

    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({
          restaurant: res.data
        });
        console.log(this.state.restaurant);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div key={this.state.restauarant.id}>
        <p>Date Visited: {this.state.restaurant.dateVisited}</p>
        <p>Cuisine: {this.state.restaurant.cuisine}</p>
        <p>City: {this.state.restaurant.city}</p>
        <p>Budget: {this.state.restaurant.budget}</p>
        <p>Accolades: {this.state.restaurant.accolades}</p>
        <p>Snack: {this.state.restaurant.snacks}</p>
      </div>
    );
  }
}

export default NewRestaurant;
