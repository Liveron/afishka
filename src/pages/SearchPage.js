import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import { Row, Col, Container, Icon, Pagination, Preloader } from 'react-materialize';
import { SearchFild } from '../component/searchFild';
import { Filter } from '../component/filter';
import { EventCard } from '../component/eventCard';
//import { useMemberState } from '../hooks/state.hook';
import { StateContext } from '../context/StateContext';


export const Search = () => {
  const stateCont = useContext(StateContext);
  let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //const { setSearchLine, checkSearchLine } = useMemberState();

  //TODO добавить отправку запроса с поисковой фразой
  const [dataEvent, setDataEvent] = useState([])
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext)
  const fetchData = useCallback(async () => {
    try {
      const data = await request('/api/data/short', 'GET', null, {
        //symbolStock: symbol,
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
    <Container>
      <Row>
        <Col s={12} m={12} l={12}>
          <SearchFild searchLine={stateCont.searchLine} setSearchLine={stateCont.setSearchLine} />
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6} l={4}>
          <Filter />
        </Col>
        <Col s={0} m={0} l={1}></Col>
        <Col s={12} m={6} l={7}>
          {cardArray.map((id) => <Row><EventCard id={id} /></Row>)}
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