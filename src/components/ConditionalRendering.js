import React, { useState } from "react";

function ConditionalRendering(){

    const [message, setMessage] = useState(false)

    function showMessage(){
        setMessage(false)
    }

    // if(!message){
    //     return <div>ConditionalRendering {message.toString()}</div>
    // } else{
    //     showMessage()
    //     return <div>ConditionalRendering {message.toString}</div>
    // }



    // const text = false

    // if(text){
    //     return <div>{text.toString()}</div>
    // }else{
    //     return <div>{text.toString()}</div>
    // }


    return message? <div>{message.toString()}</div> : <div>{message.toString()}</div> 

    // return (!message && <div>Hi</div>)
}

export default ConditionalRendering