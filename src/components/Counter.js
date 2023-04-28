import React, { Component } from "react";

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    increment(){
        this.setState({
            counter : this.state.counter + 1
        }, 
        () => {
            console.log("Callback value", this.state.counter);
        })
    }

    render(){
        return(
            <div> 
            <div>{this.state.counter}</div>
            <button onClick={() => this.increment()}> Increment </button>
            </div>
        );
    }
}

export default Counter