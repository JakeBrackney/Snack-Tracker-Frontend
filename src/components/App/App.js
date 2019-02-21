import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import RestaurantList from '../RestaurantList/RestaurantList'
import ShowRestaurant from '../ShowRestaurant/ShowRestaurant'
import axios from 'axios'

const restaurantsURL = 'http://localhost:3001/api/restaurants/'

class App extends Component {

  constructor(props) {
    super(props)
    this.state= {
      restaurants: []
    }
  }

  deleteRestaurant() {
    const restaurantId = this.props.params.id
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
   
    // pass to ShowRestaurant as prop
    // call it onclick
    // axios.delete by id
    // axios.delete(url)
//     .then((res) => {
//       console.log(res.data)
//       this.setState({
//         restaurant: [],
//         redirect: true 
//       // set app.js state to remove specific restaurant by id
//   }) 
// })
// }; 

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
    return (
      <div className="App">
        <header className="App-header">
          Snack Tracker
        </header>
        <main> 
          <div className ='restaurantList'>
            < Switch>
              <Route path='/restaurants/:id' render={(routerProps)=>< ShowRestaurant deleteRestaurant={this.deleteRestaurant} {...routerProps} {...this.state} />} />
              <Route path='/' render={(routerProps)=>< RestaurantList  {...routerProps} {...this.state} restaurants={this.state.restaurants} />}/>
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
