import React, { Component } from 'react';
import { TaskList } from './task-list/task-list';

export class Content extends Component {

    render() {
        return (
            <div className="content">
                 {this.props.children}
            </div>
        );
    }
}