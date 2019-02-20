import React, { Component } from 'react';
import './RestaurantList.css'
// import axios from 'axios'

class RestaurantList extends Component {
        render() {
            console.log(this.props.restaurants)
            if(this.props.restaurants) {
            let list = this.props.restaurants.map(index => {
                return (
                <div key={index.name}>
                    <ul>
                        <li><a href={"/restaurants/" + index._id}>{index.name}</a></li>
                        {/* <p>Date Visited: {index.dateVisited}</p> */}
                    </ul>
                </div>
                )      
            })
            return (
                <div>
                    <h1>Restaurants</h1>
                    {list}
                </div>
            );}
        }
    }
    
export default RestaurantList;