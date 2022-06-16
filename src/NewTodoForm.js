import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        //TODO: call the parent additem()
        this.props.AddItemAction({...this.state, id: uuid() })
        this.setState({
            task : "" 
        })


    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">Items </label>
            <input name='task' type='text' id='task' value={this.state.task} onChange={this.handleChange} />
            <button>Add Item</button>
        </form>
    )
  }
}

export default NewTodoForm