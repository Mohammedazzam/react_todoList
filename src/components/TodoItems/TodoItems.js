import React, { Component } from 'react';
import './TodoItems.css'

const TodoItems = (props) => {
    const {items ,deleteItem} =props;
    const ListItems = items.map(item => {
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    return(
        <div className="ListItems">
            <div>
            <span>Name</span>
            <span>Age</span>
            <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems;