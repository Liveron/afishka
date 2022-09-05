import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext';


export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
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
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      //TODO нужно убрать в проде коментарии
      //const data = await request('/api/auth/login', 'POST', {...form})
      //auth.login(data.token, data.userId, data.mode, +new Date())
      //удалить строку
      auth.login(111111, 1, false, +new Date())
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
                    name="email"
                    className="yellow-input"
                    value={form.email}
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
                    className="yellow-input"
                    value={form.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Пароль</label>
                </div>

              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow accent-3 black-text"
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