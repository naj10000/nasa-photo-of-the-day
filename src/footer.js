import React from "react";

const Footer = props =>{
return(
    <footer>
        <copyright>
    <p>{props.data.copyright} {props.data.date}</p> 
    </copyright>
    </footer>
)

}

export default Footer 