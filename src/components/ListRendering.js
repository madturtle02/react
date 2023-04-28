import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Person from "./Person";

function ListRendering(){
    const personList = [  {    "name": "John",    "age": 30,    "job": "Software Engineer",    "hobby": "Playing guitar"  }, 
                          {    "name": "Jane",    "age": 25,    "job": "Graphic Designer",    "hobby": "Reading"  },
                          {    "name": "Tom",    "age": 40,    "job": "Accountant",    "hobby": "Fishing"  },  
                        {    "name": "Sara",    "age": 28,    "job": "Marketing Manager",    "hobby": "Hiking"  }]

    return(
        <div>{personList.map(person => <Person key = {uuidv4()} person = {person}></Person>)}</div>
    )


    //do not use index as key, use only if list is static and won't be modified
    // return(
    //     <div>{personList.map((person, index) => <Person key = {index} person = {person}></Person>)}</div>
    // )

}

export default ListRendering