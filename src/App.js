import React, { Component } from 'react';
import './App.css';
import { Header } from './header/header';
import {SideNav} from './side-nav/side-nav';
import {Content} from './content/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <SideNav></SideNav>
          <Content></Content>
        </main>
      
      </div>
    );
  }
}

export default App;
