import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state={
        title:''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    onChange =(e)=>this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex',padding:'5px'}}>
                <input 
                     style={{flex:10,padding:'10px'}}
                     type="text"
                     name="title"
                     value={this.state.title}
                     onChange={this.onChange}
                     placeholder="Add Todo Item..."
                  />
                  <input 
                  type="submit" 
                  value="Submit"
                  className="btn"
                  style={{flex:1,marginLeft:'10px'}}
                  />
            </form>
        )
    }
}
AddTodo.propTypes ={
    addTodo: PropTypes.func.isRequired,
   
}

export default AddTodo
