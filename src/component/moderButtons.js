import React from 'react';
import { Icon, Button, Row } from 'react-materialize';


export const ModerButtons = () => {
    //TODO пробросить функцию отправки на сервер

    return (
        <Row>
            <Button
                node="button"
                style={{
                    marginRight: '5px'
                }}
                waves="light"
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
            >
                Отклонить
                <Icon left>
                    delete
                </Icon>
            </Button>
        </Row>
    )
};