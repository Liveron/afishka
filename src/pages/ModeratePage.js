import React from 'react';
import { Row, Col, Container, Icon, Pagination } from 'react-materialize';
import { EventCard } from '../component/eventCard';
import { ModerButtons } from '../component/moderButtons';

export const Moderator = () => {
  //TODO сделать подтвреждение события
  let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return ( 
    <Container>
      <Row>
        <Col s={12} m={6} l={7}>
          {cardArray.map((id) => <Row><EventCard id={id} /><ModerButtons/></Row>)}
        </Col>
      </Row>
      <Row>
        <Col s={0} m={2} l={2}></Col>
        <Col
          s={12} m={8} l={8}>
          <Pagination
            activePage={1}
            items={10}
            leftBtn={<Icon>chevron_left</Icon>}
            maxButtons={8}
            rightBtn={<Icon>chevron_right</Icon>}
          />
        </Col>
        <Col s={0} m={2} l={2}></Col>
      </Row>
    </Container>
	)
};