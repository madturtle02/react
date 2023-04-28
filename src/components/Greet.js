import React , {useState} from "react";

const Greet = ({name, nickname, children}) => {

    // const {name, nickname} = props

   const [word, setWord] = useState("rajib");

    function clickHandler(){
        setWord("winner")
    }

    return(
        <div>
            <h1> Greetings {name} / {nickname} </h1>
            {children}
            <h1> {word}</h1>
            <button onClick={clickHandler}> Word </button>
        </div>
    ); 
}

export default Greet