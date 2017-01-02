import React, { Component } from 'react';
import './search-filter.css';

export class SearchFilter extends Component {

    render() {
        return (
            <div className="search-filter">
                <label><input type="checkbox" />Show done</label>
                <input placeholder="Search" />
            </div>
        );
    }
}