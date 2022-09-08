import React from 'react';
import { Parallax, Button, Icon } from 'react-materialize';
import pict1 from "../img/ball.png";
import pict2 from "../img/head.webp";

export const MainBlock = () => (
    //TODO нужно всё выравнить
    <div>
        <Parallax
            image={<img alt="" src={pict1} />}
            options={{
                responsiveThreshold: 0
            }}
            children={<div>Развлечения начинаются отсюда</div>}
        />
        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Как подобрать мероприятие
                </h2>
                <p className="grey-text text-darken-3 lighten-3">
                    На сайте можно выбрать рекомендацию на основе Ваших музыкальных предпочтений. Существует прямая корреляция между Вашим выбором в музыке и Вашех характеристикой личности. На основе этой корреляции мы и предложим различные мероприятия, которые будут не только музыкальными.
                </p>
            </div>
        </div>
        <Parallax
            image={<img alt="" src={pict2}/>}
            options={{
                responsiveThreshold: 0
            }}
            children={
                <Button
                    node="button"
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                >
                    Попробовать
                    <Icon left>
                        headset
                    </Icon>
                </Button>
            }
        />
        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Можно пройти тестирование
                </h2>
                <p className="grey-text text-darken-3 lighten-3">
                    Тест позволит узнать что Вы за личность, на основе этой информации рекомендации будут более точные.
                </p>
            </div>
        </div>
        <Parallax
            image={<img alt="" src={pict2} />}
            options={{
                responsiveThreshold: 0
            }}
            children={
                <Button
                    node="button"
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                >
                    Попробовать
                    <Icon left>
                        headset
                    </Icon>
                </Button>
            }
        />
    </div>
)