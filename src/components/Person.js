import React from "react";

function Person(props){

    const {person} = props

    return(
        <div><h1>My name is {person.name}. I'm {person.age} years old. 
        I'm a {person.job} by profession. I like {person.hobby}.</h1></div>
    )
}

export default Person