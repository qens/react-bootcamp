import React, { Component } from 'react';
import { CategoryList } from './category-list/category-list';

export class SideNav extends Component {

    // constructor (props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="side-nav">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.handleChange.bind(this)} type="text" placeholder="Enter category title"/>
                    <button>Add</button>
                </form>
                <CategoryList categories={this.props.categories} chooseCategory={this.props.chooseCategory}></CategoryList>
            </div>
        );
    }

    handleChange(e) {
        this.setState({newCategory: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        var id = this.props.categories[this.props.categories.length -1].id + 1;
        var category = {id: id, name: this.state.newCategory, tasks: []};
        this.props.addCategory(category);

        console.log(this.props);
    }
}