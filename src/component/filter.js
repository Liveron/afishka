import React, { useState, useEffect } from 'react';
import { RadioGroup, DatePicker, Section, Row, Divider, Select } from 'react-materialize';

export const Filter = () => {
  const [categories, setCategories] = useState(["все"]);
  const [sum, setSum] = useState('0');
  const [price, setPrice] = useState('all');
  const [date, setDate] = useState(0);

  useEffect(() => {
    //TODO отправка на сервер запросма
  }, [date, sum, price])

  const handleSelect = (event) => {
    const text = document.querySelectorAll(".selected>span>label>span")
    const valuev = text.forEach((t) => t.textContent)
    const value = event.target.value;

    //setCategories(value);
  };
  return (
    <>
      <Section>
        <Select
          id="Select-cat"
          label='Категории'
          multiple
          onChange={handleSelect}
          className="white-text"
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value={categories}
        >
          <option value="все">
            Любые
          </option>
          <option value="настольные_игры">
            Настольные игры
          </option>
          <option value="музыкальные_концерты">
            Музыкальные концерты
          </option>
          <option value="балет">
            Балет
          </option>
          <option value="опера">
            Опера
          </option>
          <option value="театральные_представления">
            Театральные представления
          </option>
          <option value="хакатоны">
            Хакатоны
          </option>
          <option value="кино">
            Кино
          </option>
          <option value="мастер_классы">
            Мастер-классы и вебинары
          </option>
          <option value="киберспортивные_соревнования">
            Киберспортивные соревнования
          </option>
          <option value="фестивали">
            Фестивали
          </option>
        </Select>
        <Select
          id="Select-sum"
          label="Число участников"
          multiple={false}
          onChange={(e) => { setSum(e.target.value) }}
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value="0"
        >
          <option value="0">
            Любое
          </option>
          <option value="10">
            До 10
          </option>
          <option value="50">
            До 50
          </option>
          <option value="100">
            До 100
          </option>
          <option value="500">
            Больше 100
          </option>
        </Select>
      </Section>
      <Divider></Divider>
      <Section>
        <Select
          id="Select-price"
          label="Стоимость"
          multiple={false}
          onChange={(e) => { setPrice(e.target.value) }}
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value="all"
        >
          <option value="all">
            Любые
          </option>
          <option value="free">
            Бесплатно
          </option>
          <option value="pay">
            Платно
          </option>
        </Select>
      </Section>
      <Divider></Divider>
      <Section>
        <Row>
          <DatePicker
            id="DatePicker-7"
            label="Дата"
            options={{
              autoClose: false,
              container: null,
              defaultDate: null,
              disableDayFn: null,
              disableWeekends: false,
              events: [],
              firstDay: 0,
              format: 'yyyy-mm-dd',
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
              onClose: () => (setDate(document.querySelector("#DatePicker-7").value)),
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
        </Row>
      </Section>
    </>
  )
}