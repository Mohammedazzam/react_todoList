import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItem from './components/Additem/AddItem';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Mohammed', age: 22 },
      { id: 2, name: 'Ramy', age: 30 },
      { id: 3, name: 'Tareg', age: 55 },
    ]
  }

  // deleteItem = (id) => {
  //   // console.log(id)
  //   let items = this.state.items; //هذه بمعنى احفظلي كل الأيتيمز
  //   let i = items.findIndex(item => item.id === id)//  هل هو بساوي الأيتم الي راح ادوس عليه .. لو آه id شوف الايتم 
  //   items.splice(i,1) //   لو هو احذف هذا الأيتم... معنى 1 شيل الايتم الذي تم اختياره
  //   this.setState({items}) //لهذا الأيتم update بعدين اعمل 
  // }


  //filter الطريقة الثانية باستخدام اشي اسمو ال 
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">TodoList App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem AddItem={this.addItem} />
      </div>
    );
  }
}
export default App;
