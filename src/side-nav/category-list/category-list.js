import React, { Component } from 'react';

export class CategoryList extends Component {

    // constructor (props) {
    //     super(props);
    // }

    render () {
        return (
            <ul>
                {this.props.categories.map(item => (
                    <li key={item.id} onClick={e => this.props.chooseCategory(e, item)}>{item.name}</li>
                    
                ))}
            </ul>
        );
    }
}