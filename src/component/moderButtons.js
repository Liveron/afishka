import React, {useCallback, useContext, useEffect }  from 'react';
import { Icon, Button, Row, Divider } from 'react-materialize';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';


export const ModerButtons = ({id}) => {
    //TODO функцию отправки на сервер
    const { loading, request } = useHttp();
    const { token } = useContext(AuthContext);
    //des = 1 принять, 2 - связаться, 3 - удалить
    const sendDecision = useCallback(async (des) => {
        try {
          const data = await request('/api/data/short', 'POST', null, {
            Decision: des,
            IdEvent: `${id}`,
            Authorization: `Bearer ${token}`
          });
        } catch (e) { }
      }, [token, request])
    
      useEffect(() => {
        sendDecision()
      }, [sendDecision])
    return (
        <Row>
            <Button
                node="button"
                style={{
                    marginRight: '5px'
                }}
                waves="light"
                className='green'
                onClick={()=>{sendDecision(1)}}
            >
                Принять
                <Icon left>
                    check
                </Icon>
            </Button>
            <Button
                node="button"
                style={{
                    marginRight: '5px'
                }}
                waves="light"
                className='lime darken-2'
                onClick={()=>{sendDecision(2)}}
            >
                Связаться
                <Icon left>
                    email
                </Icon>
            </Button>
            <Button
                node="button"
                style={{
                    marginRight: '5px'
                }}
                waves="light"
                className='red'
                onClick={()=>{sendDecision(3)}}
            >
                Отклонить
                <Icon left>
                    delete
                </Icon>
            </Button>
            <Row></Row>
            <Divider/>
            <Row></Row>
        </Row>
    )
};