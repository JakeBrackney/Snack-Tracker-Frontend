import React, { Component } from 'react';
import './RestaurantList.css'
// import axios from 'axios'

class RestaurantList extends Component {
        render() {
            console.log(this.props.restaurants)
            if(this.props.restaurants) {
            let list = this.props.restaurants.map(index => {
                return (
                <div key={index.name} className='restaurantContainer'>
                    <div className='restaurantList'>
                        <p className='restaurantName'>Restaurant: <a href={"/restaurants/" + index._id}>{index.name}</a></p>
                        {/* <p>Date Visited: {index.dateVisited}</p> */}
                    </div>
                </div>
                )      
            })
            return (
                <div>
                    {list}
                </div>
            );}
        }
    }
    
export default RestaurantList;