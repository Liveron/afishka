import {useState, useCallback } from 'react';

export const useMemberState = () => {
  const [searchLine, setSearchLineM] = useState('');
  const [idEvent, setIdEventM] = useState('');

  const setSearchLine = useCallback((text) => {
    setSearchLineM(text);
  }, [setSearchLineM]);

  const setIdEvent = useCallback((text) => {
    setIdEventM (text);
  }, [setIdEventM]);
  return { searchLine, idEvent, setSearchLine, setIdEvent };
};