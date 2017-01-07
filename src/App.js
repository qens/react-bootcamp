import React, { Component } from 'react';
import './App.css';
import { Header } from './header/header';
import {CategoryList} from './side-nav/category-list/category-list';
import {SideNav} from './side-nav/side-nav';
import {Content} from './content/content';
import MainService from './service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: MainService.getCategories()
    }

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
            {this.props.children && React.cloneElement(this.props.children, {
              tasks: this.state.tasks
            }) || 'holla'}
          </Content>
        </main>
      
      </div>
    );
  }
}

export default App;
