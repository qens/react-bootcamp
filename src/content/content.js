import React, { Component } from 'react';
import { TaskList } from './task-list/task-list';

export class Content extends Component {

    render() {
        return (
            <div className="content"> 
                <TaskList tasks={this.props.tasks}></TaskList>
            </div>
        );
    }
}