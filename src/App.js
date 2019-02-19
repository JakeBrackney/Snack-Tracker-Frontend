import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Restaurant from '../src/Restaurant/Restaurant'

class App extends Component {

  constructor() {
    super()

    this.state= {
      restaurants: []
    }
  }

  render() {


  // let restaurantList = this.props.data.map(stock => {
    return (
      <div className="App">
        <header className="App-header">
          Snack Tracker
        </header>
        <div className ='restaurantList'>
            {/* <Link to={"/restaurants/" + restaurant.name}>
              <p>{restaurant.name}</p>
            </Link> */}
        </div>
        <div className="restaurant-list">
          {/* {restaurantList} */}
        </div>
      </div>
    )
  }
}

export default App;
