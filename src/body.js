import React, { useState } from "react";
import { Jumbotron, Container } from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styled from "styled-components"

 
const A = styled.a `
 color: white;
`

// const P = styled.p `
// position: absolute;
// top: 50%;
// left: 50%;
// text-align: center
// transform: translate(-50%, -50%);
// color: white;
// `

const Body = props => {
    const Div = styled.div `
  
    display:flex;
    height: 100vh;
    text-align: center;
    flex-direction: column;
    
    background-image: url(${props.data.hdurl})
    `

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
    
      const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    
     
    console.log(props)
    return (
 
     



  
  <Div>
      <Container>
    <Button color="danger" onClick={toggle}>{props.data.title}</Button>
    <Modal  isOpen={modal} toggle={toggle} className={className}>
    <ModalHeader toggle={toggle} close={closeBtn}>{props.data.title}</ModalHeader>
      <ModalBody background-color="secondary">
        {props.data.explanation}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}><A href="https://www.nasa.gov/">Nasa</A></Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
    </Container>
  </Div>

    )
  
    
}


export default Body