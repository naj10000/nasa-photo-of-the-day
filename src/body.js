import React from "react";



const Body = props => {
    console.log(props)
    return (
        <div>
          <p>{props.data.explanation}</p>  
        </div>
    )
}


export default Body