import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext';


export const RegisterPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: '', againpassword: ''
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
      const data = await request('/api/auth/register', 'POST', {...form});
      message(data.message);
      history.push('/auth');
    } catch (e) {}
  }

  return (
    <div className="container">
      <div className="row auth">
        <div className="col s12 m10 l8 offset-m1 offset-l2">
          <h1>А-фишка</h1>
          <div className="card grey lighten-3">
            <div className="card-content black-text">
              <span className="card-title">Регистрация</span>
              <div>

                <div className="input-field">
                  <input
                    placeholder="Введите email"
                    id="email"
                    type="text"
                    name="email"
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
                    value={form.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Пароль</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Введите повторно пароль"
                    id="password2"
                    type="password"
                    name="againpassword"
                    value={form.againpassword}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Подтвердите пароль</label>
                </div>

              </div>
            </div>
            <div className="card-action">
              <button
                className="btn grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}