import React, { Component } from 'react';

export class SideNav extends Component {

    constructor (props) {
        super(props);

        // this.state = {
        //     newCategory: ''
        // };

        // this.onInputChange = this.handleChange.bind(this);
        // this.onButtonClick = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="side-nav">
                {this.props.children}
            </div>
        );
    }

    // handleChange(e) {
    //     this.setState({newCategory: e.target.value});
    // }

    // handleSubmit(e) {

    //     var id = this.props.categories[this.props.categories.length -1].id + 1;
    //     var category = {id: id, name: this.state.newCategory, tasks: []};
    //     this.props.addCategory(category);

    //     console.log(this.props);
    // }
}