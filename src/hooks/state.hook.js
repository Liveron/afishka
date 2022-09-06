import {useState, useCallback } from 'react';

export const useMemberState = () => {
  const [searchLine, setSearchLine] = useState('');

  const checkSearchLine = useCallback(() => {
    return searchLine;
  }, [searchLine]);


  const setSearch = useCallback((text) => {
    setSearchLine(text);
  }, [setSearchLine]);

  return { setSearch, checkSearchLine };
};