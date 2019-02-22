import React, { Component } from 'react';
import './RestaurantList.css'

class RestaurantList extends Component {
        render() {
            console.log(this.props.restaurants)
            if(this.props.restaurants) {
            let list = this.props.restaurants.map(index => {
                return (
                <div key={index.name}>
                    <ul>
                        <li><a href={"/restaurants/" + index._id}>{index.name}</a></li>
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