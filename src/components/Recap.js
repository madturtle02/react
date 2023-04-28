import React, { Component } from "react";

class Recap extends Component{

constructor(){
    super()
    this.state = {
        recapProp : "This is a recap button"
    }
    this.recapMethod = this.recapMethod.bind(this);
}


// recapMethod(){
//     this.setState({
//         recapProp : "recap button changed from setState"
//     })
// }

recapMethod = () => {
    this.setState({
        recapProp : "recap button changed from setState"
    })
}

render(){
    return(
        <div> 
        <h1> {this.state.recapProp}</h1>
        {/* <button onClick={this.recapMethod.bind(this)}> Button</button> */}

        {/* uses this.recapMethod from the constructor */}
        {/* <button onClick={this.recapMethod}> Button</button> */}

        {/* uses 2nd recapMethod */}
        <button onClick={this.recapMethod}> Button</button>
        </div>
    )
}
}

export default Recap