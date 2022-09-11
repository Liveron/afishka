import React from 'react';
import { Parallax, Button, Icon } from 'react-materialize';
import pict1 from "../img/t_1.jpg";
import pict2 from "../img/face.jpg";
import pict3 from "../img/testing.jpg";

export const MainBlock = () => (
    //TODO нужно всё выравнить
    <div>
        <Parallax
            image={<img alt="" src={pict1} />}
            options={{
                responsiveThreshold: 0
            }}
            children={<div className='mainHelloDiv'>Развлечения начинаются отсюда</div>}
        />
        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Как подобрать мероприятие
                </h2>
                <p className="main-text grey-text text-darken-3 lighten-3">
                    Мы не знаем, какое мероприятие Вам понравится, однако Вы это прекрасно знаете, даже если и не догадываетесь. Наша задача помочь Вам выбрать подходящее мероприятие. Изобразите на камеру, какую эмоции Вы хотите получить от мероприятия и отправьте нам эту фотография, а мы уже постараемся, чтобы эту эмоцию Вы получили.
                </p>
                <Button
                    node="button"
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                    className='red darken-3 white-text'
                >
                    Попробовать
                    <Icon left>
                    accessibility
                    </Icon>
                </Button>
            </div>
        </div>
        <Parallax
            image={<img alt="" src={pict2} />}
            options={{
                responsiveThreshold: 0
            }}
        />
        <div className="section white">
            <div className="row container">
                <h2 className="header">
                    Можно пройти тестирование
                </h2>
                <p className="main-text grey-text text-darken-3 lighten-3">
                    Тест позволит узнать что Вы за личность, на основе этой информации рекомендации будут более точные.
                </p>
                <Button
                    node="button"
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                    className='red darken-3 white-text'
                >
                    Пройти тест
                    <Icon left>
                        text_fields
                    </Icon>
                </Button>
            </div>
        </div>
        <Parallax
            image={<img alt="" src={pict3} />}
            options={{
                responsiveThreshold: 0
            }}
        />
    </div>
)