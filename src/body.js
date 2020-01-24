import React from "react";
import { Jumbotron, Container, Button } from 'reactstrap';
import styled from "styled-components"
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';


// const Img = styled.img `
//  width: 100%;
 


const P = styled.p `
position: absolute;
top: 50%;
left: 50%;
text-align: center
transform: translate(-50%, -50%);
color: white;
`

const Body = props => {
    const Div = styled.div `
  
    display:flex;
    height: 100vh;
    text-align: center;
    flex-direction: column;
    
    background-image: url(${props.data.hdurl})
    
     `
    console.log(props)
    return (
 
        <Div  >
            <Container>
           <Jumbotron fluid inverse >

            <h1>{props.data.title}</h1>
            {/* <Img src={props.data.hdurl}/> */}
          <p>{props.data.explanation}</p> 
          
          </Jumbotron>
          </Container>
        
        
        </Div>
    )
  
    
}


export default Body