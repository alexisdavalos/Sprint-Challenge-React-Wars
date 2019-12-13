import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
import styled from 'styled-components';

const CharacterCard = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    console.log(props.data.url)

const NewCard = styled(Card)`
    width:30%;
    margin:3%;
    box-shadow: 6px 6px 20px 0px #000000ba;
    background: #000000ad;

`
const Title = styled(CardTitle)`
    font-weight:bold;
    color:white;
`
const Subtitle = styled(CardSubtitle)`
    color:white;
`
  return (
   
      <NewCard id="newCard">
        <CardBody>
          <Title>{props.data.name}</Title>
            <Subtitle style={{color:"white"}}>Birth Year: {props.data.birth_year}</Subtitle>
            <Subtitle>Gender: {(props.data.gender !== "n/a") ? props.data.gender : `No Gender`}</Subtitle>
        </CardBody>
      </NewCard>
   
  );
}

export default CharacterCard;
