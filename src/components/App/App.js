import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import RestaurantList from '../RestaurantList/RestaurantList'
import ShowRestaurant from '../ShowRestaurant/ShowRestaurant'
import EditRestaurant from '../EditRestaurant/EditRestaurant'
import axios from 'axios'
import { CLIENT_URL } from '../../constants'



class App extends Component {

  constructor(props) {
    super(props)
    this.state= {
      restaurants: []
    }
  }

  componentDidMount () {
    console.log("did mount")
    axios.get(CLIENT_URL)
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
              <Route path='/restaurants/:id' render={(routerProps)=>< ShowRestaurant {...routerProps} {...this.state} />} />
              <Route path='/restaurants/:id/edit' component = {EditRestaurant}/>
              <Route path='/' render={(routerProps)=>< RestaurantList  {...routerProps} {...this.state} restaurants={this.state.restaurants} />}/>
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}


export default App;
