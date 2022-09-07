import React from 'react';
import { Row, Col, Section } from 'react-materialize';
import { useMemberState } from '../hooks/state.hook';

export const Event = () => {
  const {checkIdCard} = useMemberState();
  const id = checkIdCard();
  //TODO запрос по айди
  return (
    <Section>
      <Row>
        <Col l={6}>
          <img href="https://materializecss.com/images/sample-1.jpg"></img>
        </Col>
        <Col l={6}>
          <p>Title</p>
        </Col>
      </Row>
      <Row>
        <Col>description</Col>
      </Row>
    </Section>
  )
};