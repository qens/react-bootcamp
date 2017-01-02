import React, { Component } from 'react';

export class CategoryList extends Component {

    constructor (props) {
        super(props);
        
        this.state = {
            categories: [
                "Category 1",
                "Category 2",
                "Category 3",
            ]
        }
    }

    render () {
        return (
            <ul>
                {this.state.categories.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }
}