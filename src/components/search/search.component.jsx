import React from 'react';
import './search.style.css';

export const Search = (props) => (
    <input
        className='search'
        type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
    />
)