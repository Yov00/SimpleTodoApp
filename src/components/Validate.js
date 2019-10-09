import React, { Component } from 'react'

export class Validate extends Component {
   state={
    display:'none',
    }

    render() {
        return (
            <div  className="validate"  style={this.props.styleofvalidation}>
          
                Please, type a name for the new todo item!
            </div>
        )
    }

}

export default Validate
