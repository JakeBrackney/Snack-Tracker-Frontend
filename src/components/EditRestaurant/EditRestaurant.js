import React, { Component } from "react";
import axios from "axios";
import { CLIENT_URL } from "../../constants";

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
    const {dateVisited, cuisine, city, budget, accolades, snack} = this.state.restaurant 
    axios.put('url' + this.props.match.params.id, {dateVisited, cuisine, city, budget, accolades, snack })
    .then((result)=> {
      this.props.history.push("/restaurants" + this.props.match.params.id)
    })

  }
  render() {
    return (
        <div class = "container"> 
        <h3 class = "panel-title">
        EDIT RESTAURANT</h3>
        </div> 
        <div class="panel-body">
            <h4><Link to={`/show/${this.state.restaurant._id}`}> Restaurant List</Link></h4>
            </div>  
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="dateVisited">Date Visited:</label>
                <input type="text" class="form-control" name="dateVisited" value={this.state.restaurant.dateVisited} onChange={this.onChange} placeholder="date visited" />
              </div>
              <div class="form-group">
                <label for="cuisine">Cuisine:</label>
                <input type="text" class="form-control" name="cuisine" value={this.state.restaurant.cuisine} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" name="city" value={this.state.restaurant.city} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="budget">Budget:</label>
                <input type="text" class="form-control" name="budget" value={this.state.restaurant.budget} onChange={this.onChange} placeholder="Budget" />
              </div>
              <div class="form-group">
                <label for="accolades">Accolades:</label>
                <input type="text" class="form-control" name="accolades" value={this.state.restaurant.accolades} onChange={this.onChange} placeholder="Accolades" />
              </div>
              <div class="form-group">
                <label for="snack">Snack:</label>
                <input type="text" class="form-control" name="snack" value={this.state.restaurant.snack} onChange={this.onChange} placeholder="snack" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>           
    )
  }
}
       
export default EditRestaurant; 

        // {/* <h4> <Link to ={`/show/${this.state.restaurant._id}`}</Link</h4>
        

//         </div>
//             <form> 
//             <input type='text' name='name'/> Name  
//                 <input type='text' name='email'/> Email
//                 <input type='text' name='profile_picture'/> Image 
//             </form>
//     //   <div key={this.state.restauarant.id}>
//         <p>Date Visited: {this.state.restaurant.dateVisited}</p>
//         <p>Cuisine: {this.state.restaurant.cuisine}</p>
//         <p>City: {this.state.restaurant.city}</p>
//         <p>Budget: {this.state.restaurant.budget}</p>
//         <p>Accolades: {this.state.restaurant.accolades}</p>
//         <p>Snack: {this.state.restaurant.snacks}</p>
//       </div>
//     );
//   }
// } */}


