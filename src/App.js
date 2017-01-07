import React, { Component } from 'react';
import './App.css';
import { Header } from './header/header';
import {CategoryList} from './side-nav/category-list/category-list';
import {SideNav} from './side-nav/side-nav';
import {Content} from './content/content';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          id: 0,
          name: 'Category 1',
          tasks: [
            {
              id: 0,
              name: 'Task 1'
            }, {
              id: 1,
              name: 'Task 2'
            },
          ]
        },{
          id: 1,
          name: 'Category 2',
          tasks: [
            {
              id: 0,
              name: 'Task 2 1'
            }, {
              id: 1,
              name: 'Task 2 2'
            },
          ]
        },{
          id: 2,
          name: 'Category 3',
          tasks: [
            {
              id: 0,
              name: 'Task 3 1'
            }, {
              id: 1,
              name: 'Task 3 2'
            },
          ],
          categories: [
            {
              id: 20,
              name: 'Category 3 1',
              tasks: [
                {
                  id: 0,
                  name: 'Task 3 1 1'
                }, {
                  id: 1,
                  name: 'Task 3 1 2'
                },
              ]
            }
          ]
        }
      ]
    };

    this.chooseCategory = this.chooseCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  chooseCategory(event, category) {
    console.log(category);
    this.setState({tasks: category.tasks})
  }

  addCategory(category) {
    this.setState(prevState => ({
      categories: prevState.categories.concat(category)
    }));
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <SideNav>
            <CategoryList categories={this.state.categories} chooseCategory={this.chooseCategory} addCategory={this.addCategory}></CategoryList>
          </SideNav>
          <Content>
            {this.props.children || 'holla'}
          </Content>
        </main>
      
      </div>
    );
  }
}

export default App;
