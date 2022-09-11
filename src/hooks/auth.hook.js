import {useState, useCallback, useEffect} from 'react';
import {useHttp} from './http.hook';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState(false);
  const [userId, setUserId] = useState(null);

  const {request} = useHttp()

  const login = useCallback((jwtToken, id, mode) => {
    setToken(jwtToken);
    setUserId(id);
    setMode(mode);

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, userMode: mode
    }))
  }, []);


  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setMode(false);
    localStorage.removeItem(storageName);
  }, []);

  const checkToken = useCallback(async (tok) => {
    try {
      await request('/api/auth/checking', 'POST', {}, {
        Authorization: `Bearer ${tok}`
      });
    } catch (e) {
      logout();
    } }, [request, logout])
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      checkToken(data.token);
      login(data.token, data.userId, data.userMode);
    }
    setReady(true);
  }, [login, checkToken]);


  return { login, logout, token, userId, mode, ready };
};