import React from "react";



const Body = props => {
    console.log(props)
    return (
        <div>

          <p>{props.data.explanation}</p> 
          <img src={props.data.url}/>
        </div>
    )
}


export default Body