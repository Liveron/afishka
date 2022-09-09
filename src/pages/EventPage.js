import React from 'react';
import { Row, Col, Container } from 'react-materialize';
import pict1 from "../img/event.jpg";

export const Event = () => {
  //TODO запрос по айди
  return (
    <Container>
      <Row></Row>
      <Row>
        <img className="eventPict" src={pict1} alt=""></img>
      </Row>
      <Row>
        <p>Title</p>
      </Row>
      <Row>
        <Col>description</Col>
      </Row>
    </Container>
  )
};