import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {

  state = {
    name: '',
    age: '',
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
   if(e.target.name.value === ''){
     return false
   }else{
    this.props.AddItem(this.state)
    this.setState({
      name:'',
      age:''
    })
   }
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Name ...." id="name" onChange={this.handleChange} value={this.state.name}/>
          <input type="number" placeholder="Enter Age ...." id="age" onChange={this.handleChange} value={this.state.age}/>
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}
export default AddItem;
