import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
    state={
        input:"",
        items:[]
    };
    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        });
        console.log(this.state.input);
    }
    storeItems=(event)=>{
        event.preventDefault();
        const{input}=this.state;
        this.setState({
            items:[...this.state.items, input],
            input:""
            
        });

    }
    deleteitem=key=>{
        const allItems = this.state.items;
        allItems.splice(key,1);
        this.setState({
            items:allItems
        });
    }
    render() {
        const {input,items} =this.state;
        console.log(items);

        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                <input type="text" placeholder="Enter Items..." value={input} onChange={this.handleChange}/>
                </form>
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>
                        {data}<i className="fa fa-facebook" onClick={()=>this.deleteitem(index)}></i>
                        </li>
                    ))}  
                </ul>
            </div>
        );
    }
}
