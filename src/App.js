import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItem from './components/Additem/AddItem';

 class App extends Component {
  state ={
    items :[
      {id:1,name:'Mohammed', age:22},
      {id:2,name:'Ramy', age:30},
      {id:3,name:'Tareg', age:55},
    ]
  }
  render() {
    return (
      <div className="App">
        TodoList App
        <TodoItems items ={this.state.items}/>
        <AddItem/>
      </div>
    );
  }
}
export default App;
