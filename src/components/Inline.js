import React from "react";

function Inline(){

    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    return(
        <div>
        <div style={heading}>Inline</div>

        {/* it may work even without importing the css file */}
        {/* But note, modules.css won't work like this. */}
        <div className= "error">Inline</div>
        </div>
    )
}

export default Inline