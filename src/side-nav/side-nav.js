import React, { Component } from 'react';
import { CategoryList } from './category-list/category-list';

export class SideNav extends Component {

    constructor (props) {
        super(props);

        this.state = {
            newCategory: ''
        };

        this.onInputChange = this.handleChange.bind(this);
        this.onButtonClick = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="side-nav">
                <div>
                    <input onChange={this.onInputChange} type="text" placeholder="Enter category title"/>
                    <button  onClick={this.onButtonClick}>Add</button>
                </div>
                <CategoryList categories={this.props.categories} chooseCategory={this.props.chooseCategory}></CategoryList>
            </div>
        );
    }

    handleChange(e) {
        this.setState({newCategory: e.target.value});
    }

    handleSubmit(e) {

        var id = this.props.categories[this.props.categories.length -1].id + 1;
        var category = {id: id, name: this.state.newCategory, tasks: []};
        this.props.addCategory(category);

        console.log(this.props);
    }
}