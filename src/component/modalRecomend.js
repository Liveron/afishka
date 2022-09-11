import React from 'react';
import { Button, Icon, Modal, TextInput } from 'react-materialize';
import { useHistory } from 'react-router-dom';

export const ModalRecomend = () => {
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
  const OnSumbit = (e) => {
    e.preventDefault();
    const file = document.getElementById("TextInput-36").files[0];
    console.log('base64', getBase64(file));

    history.push('/suggestion');
  }
  return (
    <Modal
      actions={[
        <Button flat modal="close" node="button" waves="grey">Закрыть</Button>
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Выбрать событие по эмоциям"
      id="Modal-11"
      open={false}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%'
      }}

      trigger={<Button
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
      </Button>}
    >
      <p>
        При отправке фотографии пару сотен искусственных нейронов начнут шевелиться, перемалывая сотни тысяч параметров, чтобы на стыке физиогномики и математики предложить Вам идеальное мероприятие
      </p>
      <form onSubmit={OnSumbit}>
        <TextInput
          id="TextInput-36"
          label="File"
          type="file"
        />
        <Button
          className='red darken-3 white-text'
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
    </Modal>
  )
}