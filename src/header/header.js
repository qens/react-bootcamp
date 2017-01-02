import React, { Component } from 'react';
import { SearchFilter } from './search-filter/search-filter';
import './header.css';

export class Header extends Component {

    render() {
        return (
            <header>
                <div className="header">
                    <h2>To-Do List</h2>
                    <SearchFilter></SearchFilter>
                </div>
                <div className="progress-bar">
                    <div className="progress-line"></div>
                </div>
            </header>
        );
    }
}