


import React from 'react';
import {Card, Button } from 'react-bootstrap';


   const Tarjetas = ({character}) => {
    return(

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
                  <span>Species: {character.species}</span>
                  <hr></hr>
                  <span>Gender:{character.gender}</span>
                  <hr></hr>
                  <span>Status:{character.oprecio}</span>
          </Card.Text>
          <Button variant="primary">tarjetas</Button>
        </Card.Body>
      </Card>
    )
     

   }



   export default Tarjetas;
