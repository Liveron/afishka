import React from 'react';
import { Row, Col } from 'react-materialize';
import { SearchFild } from '../component/searchFild';
import { Filter } from '../component/filter';
import { EventCard } from '../component/eventCard';


export const Search = () => {
  let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <Row>
        <Col s={12} m={12} l={12}>
          <SearchFild />
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6} l={3}>
          <Filter />
        </Col>
        <Col s={12} m={6} l={3}>
          {cardArray.map((id) => <Row><EventCard /></Row>)}
        </Col>
      </Row>
    </>
  )
};