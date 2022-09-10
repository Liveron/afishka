import React from 'react';
import { TextInput } from 'react-materialize';

export const SearchFild = ({ searchLine, setSearchLine }) => {
    const menuHandler = () => {
        const text = document.querySelector("#mainSearch").value;
        setSearchLine(text);
    }
    return (
        <TextInput
            id="mainSearch"
            placeholder="Название мероприятия"
            value={searchLine}
            onChange={(e)=>{
                const text = document.querySelector("#mainSearch").value;
                setSearchLine(text);
            }}
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                    menuHandler();
                }
            }}
        />
    )
}