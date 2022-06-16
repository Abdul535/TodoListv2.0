import React, { Component } from 'react'
export class Todo extends Component {
   constructor(props){
    super(props)
    this.state = {
        edit : false,
        task : this.props.chiz.task 
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleform = this.toggleform.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
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
      <li >{this.props.chiz.task}</li>
      <button onClick={this.handleRemove}>X</button>
      <button onClick={this.toggleform}>Edit</button>
      </div>)
    )
  }
}

export default Todo