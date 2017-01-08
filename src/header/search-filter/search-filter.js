import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import './search-filter.css';

export class SearchFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDone: false
        }

        this.triggerShowDone = this.triggerShowDone.bind(this);
        this.search = this.search.bind(this);
    }

    triggerShowDone (e) {
        browserHistory.push(`?showDone=${this.state.showDone}`);
        this.setState({showDone: !this.state.showDone});
    }

    search(e) {
        console.log(this.props.router);
        var val = e.target.value;
        console.log(val);
        browserHistory.push(`?search=${val}`);
    }

    render() {
        return (
            <div className="search-filter">
                <label><input type="checkbox" checked={this.state.showDone} onClick={this.triggerShowDone} />Show done</label>
                <input placeholder="Search" onChange={this.search} />
            </div>
        );
    }
}