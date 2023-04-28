import React, {Component} from "react";
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

    constructor(){
        super()
        this.state = {
            parentName : "parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }


    greetParent(props){
        alert(`Hello ${this.state.parentName} from ${props}`)
    }

    render(){
        return(
            <div>
                <ChildComponent greetParent = {this.greetParent}/>
            </div>
        );
    }
}
export default ParentComponent