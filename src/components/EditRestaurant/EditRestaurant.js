import React, { Component } from "react";
import axios from "axios";
import { CLIENT_URL } from "../../constants";
// import { Link } from 'react-router-dom';

class EditRestaurant extends Component {
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
    console.log(url)

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

  onChange = (e) => {
    const state = this.state.restaurant
    state[e.target.name] = e.target.value;
    this.setState({restaurant: state})
  }
  onSubmit = (e) => {
    e.preventDefault();
    const restaurantId = this.props.match.params.id;
    const url = `${CLIENT_URL}${restaurantId}`;
    console.log(this.props.match.params.id);
    
    const {dateVisited, cuisine, city, budget, accolades, snacks} = this.state.restaurant 
    axios.put(url, {dateVisited, cuisine, city, budget, accolades, snacks })
    .then((result)=> {
      console.log(result);
      
      this.props.history.push("/restaurants/" + this.props.match.params.id)
    })

  }
  render() {
    return (
        <div className="container"> 
          <h3 className="panel-title">EDIT RESTAURANT</h3>
          <div className="panel-body">
              {/* <h4><Link to={`/restaurants/${this.state.restaurant._id}`}> Restaurant List</Link></h4> */}
          </div>  
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="dateVisited">Date Visited:</label>
              <input type="text" className="form-control" name="dateVisited" value={this.state.restaurant.dateVisited} onChange={this.onChange} placeholder="date visited" />
            </div>
            <div className="form-group">
              <label for="cuisine">Cuisine:</label>
              <input type="text" className="form-control" name="cuisine" value={this.state.restaurant.cuisine} onChange={this.onChange} placeholder="Title" />
            </div>
            <div className="form-group">
              <label for="city">City:</label>
              <input type="text" className="form-control" name="city" value={this.state.restaurant.city} onChange={this.onChange} placeholder="City" />
            </div>
            <div className="form-group">
              <label for="budget">Budget:</label>
              <input type="text" className="form-control" name="budget" value={this.state.restaurant.budget} onChange={this.onChange} placeholder="Budget" />
            </div>
            <div className="form-group">
              <label for="accolades">Accolades:</label>
              <input type="text" className="form-control" name="accolades" value={this.state.restaurant.accolades} onChange={this.onChange} placeholder="Accolades" />
            </div>
            <div className="form-group">
              <label for="snacks">Snack:</label>
              <input type="text" className="form-control" name="snacks" value={this.state.restaurant.snacks} onChange={this.onChange} placeholder="snacks" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>      
        </div>      
    )
  }
}
       
export default EditRestaurant; 


