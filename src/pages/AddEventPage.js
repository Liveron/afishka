import React from 'react';
import { Row, Col, Section, Container, TextInput, Textarea, DatePicker, TimePicker, Button, Icon } from 'react-materialize';
import { useHistory } from 'react-router-dom';


export const AddEvent = () => {
  const history = useHistory();
  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  //TODO запрос на создание события
  const OnSumbit = (e) => {
    e.preventDefault();
    const file = document.getElementById("TextInput-26").files[0];
    console.log('base64',getBase64(file));

    history.push('/main');
  }
  return (
    <Container>
      <Section><p>Вы можете подать заявку на мероприятие. Пожалуйста, заполните все поля доступным и понятным языком, не пропуская поля.</p></Section>
      <Section>
        <form onSubmit={OnSumbit}>
          <TextInput
            id="addNameEvent"
            label="Название мероприятия"
          />
          <Textarea
            id="Textarea-53"
            label="Описание"
          />
          <TextInput
            id="TextInput-26"
            label="File"
            type="file"
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
                label="Время"
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
            className='red darken-3 black-text'
            node="button"
            waves="light"
            type="submit"
          //onClick={sendHandler}
          >
            Отправить
            <Icon right>
              send
            </Icon>
          </Button>
        </form>
      </Section>
    </Container>
  )
};