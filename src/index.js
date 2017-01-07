import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import {TaskList} from './content/task-list/task-list';
import {EditTask} from './content/edit-task/edit-task';
import './index.css';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" components={App} >
      <Route path="/:categoryId" component={TaskList}></Route>
      <Route path="/:categoryId/:taskId/edit"  component={EditTask} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
