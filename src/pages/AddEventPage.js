import React from 'react';
import { Row, Col, Section, Container, TextInput, Textarea, DatePicker, TimePicker, Button, Icon } from 'react-materialize';
import { useHistory } from 'react-router-dom';


export const AddEvent = () => {
  const history = useHistory();
  //TODO запрос на создание события
  const sendHandler = (e) => {
    e.preventDefault();
    history.push('/main');
  }
  return (
    <Container>
      <Section><p>Вы можете подать заявку на мероприятие. Пожалуйста, заполните все поля доступным и понятным языком, не пропуская поля.</p></Section>
      <Section>
        <TextInput
          id="addNameEvent"
          label="Название мероприятия"
        />
        <Textarea
          id="Textarea-53"
          label="Описание"
        />
        <TextInput
          id="TextInput-48"
          label="Ссылка на картинку"
        />
        <TextInput
          id="TextInput-48"
          label="Цена"
        />
        <Row>
          <Col s={12} m={6} l={6}>
            <DatePicker
              label="Дата"
              id="DatePicker-7"
              options={{
                autoClose: false,
                container: null,
                defaultDate: null,
                disableDayFn: null,
                disableWeekends: false,
                events: [],
                firstDay: 0,
                format: 'mmm dd, yyyy',
                i18n: {
                  cancel: 'Cancel',
                  clear: 'Clear',
                  done: 'Ok',
                  months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                  ],
                  monthsShort: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ],
                  nextMonth: '›',
                  previousMonth: '‹',
                  weekdays: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                  ],
                  weekdaysAbbrev: [
                    'S',
                    'M',
                    'T',
                    'W',
                    'T',
                    'F',
                    'S'
                  ],
                  weekdaysShort: [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                  ]
                },
                isRTL: false,
                maxDate: null,
                minDate: null,
                onClose: null,
                onDraw: null,
                onOpen: null,
                onSelect: null,
                parse: null,
                setDefaultDate: false,
                showClearBtn: false,
                showDaysInNextAndPreviousMonths: false,
                showMonthAfterYear: false,
                yearRange: 10
              }}
            />
          </Col>
          <Col s={12} m={6} l={6}>
            <TimePicker
              id="TimePicker-30"
              options={{
                autoClose: false,
                container: null,
                defaultTime: 'now',
                duration: 350,
                fromNow: 0,
                i18n: {
                  cancel: 'Cancel',
                  clear: 'Clear',
                  done: 'Ok'
                },
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                onSelect: null,
                showClearBtn: false,
                twelveHour: true,
                vibrate: true
              }}
            />
          </Col>
        </Row>
        <Button
          node="button"
          waves="light"
          onClick={sendHandler}
        >
          Отправить
          <Icon right>
            send
          </Icon>
        </Button>
      </Section>
    </Container>
  )
};