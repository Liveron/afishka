import React from 'react';
import { TextInput } from 'react-materialize';

export const SearchFild = ({ searchLine, setSearchLine }) => {
    console.log(searchLine);
    const menuHandler = () => {
        const text = document.querySelector("#mainSearch").value;
        console.log(text)
        setSearchLine(text);
    }
    return (
        <TextInput
            id="mainSearch"
            placeholder="Название мероприятия"
            value={searchLine}
            onChange={(e)=>{
                console.log(e.value)
            }}
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                    menuHandler();
                }
            }}
        />
    )
}