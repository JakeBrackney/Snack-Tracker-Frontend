import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import RestaurantList from '../RestaurantList/RestaurantList'
import ShowRestauarnt from '../ShowRestaurant/ShowRestaurant'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state= {
      restaurants: []
    }
  }
  componentDidMount () {
    console.log("did mount")
    axios.get('http://localhost:3001/api/restaurants')
      .then((res) => {
        console.log(res.data)
        this.setState({
          restaurants: res.data
        })
        console.log(this.state.restaurants)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
  // let restaurantList = this.props.data.map(stock => {
    return (
      <div className="App">
        <header className="App-header">
          Snack Tracker
        </header>
        <main> 
        <div className ='restaurantList'>
        < Switch>
            <Route path='/restaurants/:id' render={(routerProps)=>< ShowRestaurant {...routerProps} {...this.state} />} />
            <Route path='/' render={(routerProps)=>< RestaurantList  {...routerProps} {...this.state} restaurants={this.state.restaurants} />}/>
          </Switch>
          </div>
        </main>
        

            {/* <Link to={"/restaurants/" + restaurant.name}>
              <p>{restaurant.name}</p>
            </Link> */}
        
        <div className="restaurant-list">
          {/* {restaurantList} */}
        </div>
      </div>
    )
  }
}

export default App;
