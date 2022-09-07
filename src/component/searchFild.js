import React from 'react';
import { TextInput } from 'react-materialize';

export const SearchFild = ({ searchText, setSearchLine }) => {
    const menuHandler = () => {
        const text = document.querySelector("#mainSearch").value;
        setSearchLine(text);
    }
    console.log(searchText());
    return (
        <TextInput
            id="mainSearch"
            placeholder="Название мероприятия"
            value={searchText()}
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                    menuHandler();
                }
            }}
        />
    )
}