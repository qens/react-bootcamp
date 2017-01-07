import React, { Component } from 'react';

export class TaskList extends Component {

    constructor(props){
        super(props);
        console.log('asdf');
    }

    render () {
        return (
            <div>
                {this.props.tasks ? (<div>
                    <input type="text" placeholder="Add new task" />
                    <button>Add</button>
                 </div>) : null }
                <ul>
                    { this.props.tasks && this.props.tasks.map(task=> (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}