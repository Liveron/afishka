import React from 'react';
import { RadioGroup, DatePicker, Section, Row, Divider } from 'react-materialize';

export const Filter = () => {
  return (
    <>
      <Section>
        <Row><h5>Число участников</h5></Row>
        <Row>
          <RadioGroup
            label="sums"
            name="sum"
            onChange={function noRefCheck() { }}
            options={[
              {
                label: 'До 10',
                value: '10'
              },
              {
                label: 'До 50',
                value: '50'
              },
              {
                label: 'До 100',
                value: '100'
              }
            ]}
          />
        </Row>
      </Section>
      <Divider></Divider>
      <Section>
        <Row><h5>Стоимость</h5></Row>
        <Row>
          <RadioGroup
            label="price"
            name="price"
            onChange={function noRefCheck() { }}
            options={[
              {
                label: 'Бесплатно',
                value: '0'
              },
              {
                label: 'Платно',
                value: '1'
              }
            ]}
          />
        </Row>
      </Section>
      <Divider></Divider>
      <Section>
        <Row><h5>Дата</h5></Row>
        <Row>
          <DatePicker
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
        </Row>
      </Section>
    </>
  )
}