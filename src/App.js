import {BrowserRouter as Router,Route} from 'react-router-dom';
import React,{ Component }  from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Validate from './components/Validate';
// import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    todos:[],
    style:{
          display:'none'
          }
  }
  displayMe=(e)=>{
    if(e){
      this.setState({style:{display:'none'}})
    }
    else{
      this.setState({style:{display:'block'}})
    }
}

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data}));
  }
  // Toggle Complete
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id === id)
      {
        todo.completed = !todo.completed;
      }
      return todo;
    
      })
  
 });
}

// Delete The Todo Item
delTodo = (id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res=>  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}))

}
// Add Todo
addTodo = (title)=>{

  
  if(title){

    this.displayMe(true);
    
    let lastTodo = this.state.todos[this.state.todos.length - 1].id;
    axios.post('https://jsonplaceholder.typicode.com/todos',{  
      id:lastTodo.id + 1,
      title:title,
      completed:false
    }).then(res=> this.setState({todos:[...this.state.todos,res.data]}));
    
  }
  else{
    this.displayMe(false);
   
  }
}

  render(){
    let styleofvalidation = this.state.style;
  return (
    <Router >
    <div className="App">
      <div className="container">
        <Header />
        
        <Route exact path="/" render={props=>(
          <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Validate  styleofvalidation={styleofvalidation}/>
                <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                />

            </React.Fragment>
            )}/>

            
            <Route path="/about" render={props=>(
              <React.Fragment>
                <About/>
                </React.Fragment>
            )}/>
       
      </div>
    </div>
    </Router>
  );
 }
}

export default App;
