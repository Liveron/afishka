import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import { useMemberState } from '../hooks/state.hook';

export const EventCard = ({id}) => {
  const history = useHistory();
  const {setIdCard} = useMemberState();
  //TODO запрос информация о событии используя айди

  const linkHandler = (e) => {
    e.preventDefault();
    setIdCard(id);
    history.push('/event');
  }

  return (
    <Row>
      <Col
      >
        <Card
          actions={[
            <a key="1" href="/event" onClick={linkHandler}>This is a Link</a>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}
        >
          Here is the standard card with an image thumbnail.
        </Card>
      </Col>
    </Row>
  )
}