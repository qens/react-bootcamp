import React, { Component } from 'react';
import { TaskList } from './task-list/task-list';

export class Content extends Component {

    render() {
        return (
            <div className="content">
                 {this.props.tasks ? (<div>
                    <input type="text" placeholder="Add new task" />
                    <button>Add</button>
                 </div>) : null }
                <TaskList tasks={this.props.tasks}></TaskList>
            </div>
        );
    }
}