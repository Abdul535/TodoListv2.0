import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
        todos : [
            {task: "Take bath",id: uuid()}
    ]}
    this.RemoveItem = this.RemoveItem.bind(this)
    this.AddItem = this.AddItem.bind(this)
  }

  AddItem(Item){
    // const newItem = [...Item, id: uuid()] 
    this.setState(st => ({
        todos : [...st.todos, Item]
    })) 
    console.log('All Items are ', this.state.todos)
  }

  RemoveItem(gid){
    console.log('removing '+ gid)
    this.setState({
        todos : this.state.todos.filter((todo)=> (todo.id !== gid))
    })
  }

  render() {
    const List = this.state.todos.map((e)=>{
        return(
        <ul key={e.id}>
            <Todo ActionRemoveItem={this.RemoveItem} chiz={e}/>
        </ul>
        )
    })
    return (
        <div>
            {List}
            <NewTodoForm AddItemAction={this.AddItem} />
        </div>
    )
  }
}

export default TodoList