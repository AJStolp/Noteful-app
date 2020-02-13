import React from 'react';
// import {Route} from 'react-router-dom';
import Header from './header';
import { render } from '@testing-library/react';
import SideBar from './sideBar/sideBar';
import DummyStore from './dummy-store';
import Notes from './notes/notes';
import Moment from 'react-moment';

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
          <Notes notes={this.state.notes}/>
          {/* <Moment date={dateToFormat} /> */}
      </div>
    );

  }
}

export default App;
