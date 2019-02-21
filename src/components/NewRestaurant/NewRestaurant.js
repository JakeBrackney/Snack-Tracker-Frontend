import React, { Component } from 'react';

class NewRestaurant extends Component {

  constructor(props) {
    super(props)

    this.state = {
      restaurants: []
    }
    this.addRestaurant = this.addRestaurant.bind(this)
  }

  addRestaurant() {

    // let restaurants = this.props.restaurants.push(obj => { < -- this may be the wrong approach

    // add new restaurant to JSON data
    // axios??

    // })


  }

  componentDidMount() {
    // not sure what to put here
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Restaurant Name' />
          <input type='text' placeholder='Date Visited' />
          <input type='text' placeholder='Cuisine' />
          <input type='text' placeholder='City' />
          <input type='text' placeholder='Budget' />
          <input type='text' placeholder='Accolades' />
          <input type='text' placeholder='Notes' />
          <button onClick={this.addRestaurant} type='submit'>Add Restaurant</button>
        </form>
      </div>
    );
  }
}

export default NewRestaurant;