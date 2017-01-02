import React, { Component } from 'react';
import { SearchFilter } from './search-filter/search-filter';
import './header.css';

export class Header extends Component {

    render() {
        return (
            <header>
                <h2>To-Do List</h2>
                <SearchFilter></SearchFilter>
            </header>
        );
    }
}