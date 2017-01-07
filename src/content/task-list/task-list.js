import React, { Component } from 'react';

export class TaskList extends Component {

    constructor(props){
        super(props);
        console.log('asdf');
    }

    render () {
        return (
            <ul>
                { this.props.tasks && this.props.tasks.map(task=> (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        );
    }
}