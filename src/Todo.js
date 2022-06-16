import React, { Component } from 'react'

export class Todo extends Component {
   constructor(props){
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
   }
  handleRemove(e){
    this.props.ActionRemoveItem(this.props.chiz.id)
  }
  render() {
    return (
      <div>
      <li>{this.props.chiz.task}</li>
      <button onClick={this.handleRemove}>X</button>
      <button>Edit</button>
      </div>
    )
  }
}

export default Todo