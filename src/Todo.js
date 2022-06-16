import React, { Component } from 'react'
import './Todo.css'
export class Todo extends Component {
   constructor(props){
    super(props)
    this.state = {
        edit : false,
        task : this.props.chiz.task,
        isStroke : false 
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleform = this.toggleform.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.toggleStroke = this.toggleStroke.bind(this)
   }
  handleRemove(e){
    this.props.ActionRemoveItem(this.props.chiz.id)
  }
  handleSave(e){
    e.preventDefault()
    console.log("chlru mai handleSave()")
    this.props.ActionUpdateItem(this.props.chiz.id,this.state.task)
    this.setState({
        edit: false
    })
  }
  toggleform(e){
    this.setState({
        edit: !this.state.edit
    })
  }
  toggleStroke(){
    this.setState({
        isStroke : !this.state.isStroke
    })
  }
  handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
  }
  render() {
    return (
       this.state.edit===true ?
        (<form onSubmit={this.handleSave}>
            <label htmlFor="task">Update </label>
            <input name='task' type='text' id='task' onChange={this.handleChange} value={this.state.task}/>
            <button>Save</button>
        </form>)
       : 
      (<div>
      <li className={this.state.isStroke===true? 'stroke': ''} onClick={this.toggleStroke}>{this.props.chiz.task}</li>
      <button onClick={this.handleRemove}>X</button>
      <button onClick={this.toggleform}>Edit</button>
      </div>)
    )
  }
}

export default Todo