import React from "react";
import styled from "styled-components";

const Foot = styled.footer `
display: flex;
flex-direction: column;
 background-color: grey;

`

const Footer = props =>{
return(

    <Foot>
        
    <p>@CopyRight {props.data.copyright} {props.data.date}</p>     
    </Foot>
)

}

export default Footer 