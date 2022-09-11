import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}, mode='no-cors') => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
      }

      const response = await fetch(url, {method, body, headers, mode});
      const data = await response.json();

      if (!response.ok) {
        throw new Error('ошибка'||data.message || 'Что-то пошло не так');
      }

      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    };
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
}