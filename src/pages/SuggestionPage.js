import React from 'react';
import { Button, Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';
import { useHistory } from 'react-router-dom';

export const Suggestion = () => {
    return (
        <Container>
            <Row>
                <Col m={6} s={2} l={2}></Col>
                <Col
                    m={12} s={8} l={8}
                >
                    <Card
                        actions={[
                            <Button
                                node="button"
                                waves="light"
                                style={{marginRight: 10}}
                            >
                                Подробнее
                                <Icon right>
                                arrow_forward
                                </Icon>
                            </Button>,
                            <Button
                                node="button"
                                waves="light"
                            >
                                Другое мероприятие
                                <Icon right>
                                autorenew
                                </Icon>
                            </Button>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};