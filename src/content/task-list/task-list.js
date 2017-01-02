import React, { Component } from 'react';

export class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [
                'Task 1',        
                'Task 2',
                'Task 3',
            ]
        }
    }

    render () {
        return (
            <ul>
                {this.state.tasks.map(task=> (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        );
    }
}