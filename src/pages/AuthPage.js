import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext';


export const AuthPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    username: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    history.push('/register');
  }

  const loginHandler = async () => {
    try {
      //TODO нужно убрать в проде коментарии
      //const data = await request('/auth/login', 'POST', {...form})
      //auth.login(data.token, data.userId, data.mode, +new Date())
      //удалить строку
      auth.login(111111, 1, false, +new Date());
      history.push('/');
    } catch (e) {}
  }

  return (
    <div className="container">
      <div className="row auth">
        <div className="col s12 m10 l8 offset-m1 offset-l2">
          <h1>А-фишка</h1>
          <div className="card grey lighten-3">
            <div className="card-content black-text">
              <span className="card-title">Авторизация</span>
              <div>

                <div className="input-field">
                  <input
                    placeholder="Введите email"
                    id="email"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Введите пароль"
                    id="password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Пароль</label>
                </div>

              </div>
            </div>
            <div className="card-action">
              <button
                className="btn red darken-3 white-text"
                style={{marginRight: 10}}
                disabled={loading}
                onClick={loginHandler}
              >
                Войти
              </button>
              <button
                className="btn grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}