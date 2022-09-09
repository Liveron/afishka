import React from 'react';
import { Row, Container, TextInput, Button, Icon } from 'react-materialize';
import { useHistory } from 'react-router-dom';

export const Personal = () => {
  //TODO место для токена музыки
  const history = useHistory();
  const sendHandler = (e) => {
    e.preventDefault();
    history.push('/main');
  }
  return (
    <Container>
      <Row></Row>
      <Row>
        Ваши предпочтения
      </Row>
      <Row>
        <TextInput
          id="TextInput-42"
          placeholder="Любимые направления"
        />
      </Row>
      <Button
        className='red darken-3 white-text'
        node="button"
        waves="light"
        onClick={sendHandler}
      >
        Сохранить
        <Icon right>
          save
        </Icon>
      </Button>
    </Container>
  )
};