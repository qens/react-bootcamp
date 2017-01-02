import React, { Component } from 'react';
import { CategoryList } from './category-list/category-list';

export class SideNav extends Component {

    render() {
        return (
            <div className="side-nav">
                <CategoryList></CategoryList>
            </div>
        );
    }
}