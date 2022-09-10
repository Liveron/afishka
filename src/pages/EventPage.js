import React, {useState, useCallback, useContext, useEffect } from 'react';
import { Row, Col, Container, Preloader } from 'react-materialize';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
//TODO удалить картинку
import pict1 from "../img/event.jpg";

export const Event = ({ idEvent }) => {
  //TODO запрос по айди
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);
  const [dataEvent, setDataEvent] = useState([])
  const fetchData = useCallback(async () => {
    try {
      const data = await request('/api/data/short', 'GET', null, {
        IdEvent: `${idEvent}`,
        Authorization: `Bearer ${token}`
      });
      setDataEvent(data);
    } catch (e) { }
  }, [token, request])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return (
      <Col s={4}>
        <Preloader
          active
          color="red"
          flashing={false}
          size="small"
        />
      </Col>
    )
  }

  return (
    //TODO вставить данные из дата
    <Container>
      <Row></Row>
      <Row>
        <img className="eventPict" src={pict1} alt=""></img>
      </Row>
      <Row>
        <p>Title</p>
      </Row>
      <Row>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lectus eu porttitor iaculis. Sed finibus nisi turpis, eget sollicitudin risus laoreet eu. Suspendisse tincidunt in ex id lobortis. Sed ac turpis eget magna tristique tristique nec vitae libero. Mauris elementum risus massa, eget aliquet arcu lacinia in. Fusce scelerisque sodales varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet hendrerit ipsum. Quisque in elit bibendum, pharetra felis in, viverra ligula. Ut consectetur facilisis eros, a porta arcu venenatis mattis. Vivamus non nulla tincidunt, dignissim nunc eget, semper sapien. Morbi rhoncus neque nulla, a sagittis massa volutpat sed. In at ante mattis, molestie odio a, ornare orci.</p>
      </Row>
      <Row><p>Время проведения: { }</p></Row>
      <Row><p>Количество участников: { }</p></Row>
      <Row><p>Бюджет: { }</p></Row>
    </Container>
  )
};