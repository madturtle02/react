import React from "react";
import './StyleSheet.css'

function Styles(props){

    const className = props.primary ? 'primary' : ''
    return(
        <div className = {`${className} size-xl`}>Styles</div>
    )
}

export default Styles


//Stylying React components

// 1) CSS StyleSheets 
//2) Inline styling
//3) css modules