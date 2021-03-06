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

    this._onChanges = this._onChanges.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  _onChanges() {
    this.setState({categories: MainService.getCategories()});
  }

  componentDidMount(){
      MainService.addChangeListener(this._onChanges);
  }

  componentWillUnmount(){
      MainService.removeChangeListener(this._onChanges);
  }

  chooseCategory(event, category) {
    event.stopPropagation();
    console.log(category);
    this.setState({tasks: category.tasks});
    console.log(this.props);
    this.props.router.push(`/${category.id}`);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <SideNav>
            <CategoryList categories={this.state.categories} chooseCategory={this.chooseCategory}></CategoryList>
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
