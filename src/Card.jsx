import React from "react";
import {
  Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, Col, CardImg
} from 'reactstrap';
import styled from "styled-components";


const SpaceBorder = styled.div`
  color: grey;
  margin: 2% 15%;
  align-items: center;
`;

const Header = styled.div`
  background:darkgrey;
`;


const SpaceCard = (props) => {
  console.log(props);

  return(
    <SpaceBorder>
    <Card  body inverse color="info">
    <Header><CardHeader tag="h3">{props.title}</CardHeader></Header>
      <CardBody>Description: {props.explanation}</CardBody>
      <CardText>Date: {props.date}</CardText>
        <CardImg className="nasa-image" alt="nasa photo" src={props.url}/>
    </Card>
    </SpaceBorder>

  );
};

export default SpaceCard;

