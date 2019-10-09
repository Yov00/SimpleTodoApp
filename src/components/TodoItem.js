import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () =>{
       return{
           backgroundColor: '#f4f4f4',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none',
           borderBottom:3+'px solid white',
           padding:'10px 5px',
           transition:'4s',
       }
    }
   
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                
                <p>
                    <input type="checkbox" id={this.props.todo.id} onChange={this.props.markComplete.bind(this, id)}/> &nbsp;
                        <label htmlFor={this.props.todo.id}>
                            { title }
                        </label>
                   <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    
}
const btnStyle = {
    background:'#ff0000',
    color:'white',
    border:'none',
    width:'25px',
    height:'25px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right',
}

export default TodoItem
