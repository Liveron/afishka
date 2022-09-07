import {useState, useCallback } from 'react';

export const useMemberState = () => {
  const [searchLine, setSearchLineM] = useState('');
  const [idCard, setIdCardM] = useState('');

  const checkSearchLine = useCallback(() => {
    return searchLine;
  }, [searchLine]);

  const setSearchLine = useCallback((text) => {
    setSearchLineM(text);
  }, [setSearchLineM]);

  const checkIdCard = useCallback(() => {
    return idCard;
  }, [idCard]);

  const setIdCard = useCallback((text) => {
    setIdCardM (text);
  }, [setIdCardM ]);
  return { setSearchLine, checkSearchLine, checkIdCard, setIdCard };
};