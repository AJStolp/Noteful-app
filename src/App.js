import React from 'react';
// import {Route} from 'react-router-dom';
import Header from './header';
import { render } from '@testing-library/react';
import SideBar from './sideBar/sideBar';
import DummyStore from './dummy-store';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        folders: [],
        notes: [],
    }
  }
  render() {
    return (
      <div className="App">
          <Header />
          <SideBar />
      </div>
    );

  }
}

export default App;
