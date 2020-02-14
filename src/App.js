import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import { render } from '@testing-library/react';
import SideBar from './sideBar/sideBar';
import DummyStore from './dummy-store';
import Notes from './notes/notes';
import Moment from 'moment';
import NotesMain from './notesMain/notesMain';
import dummyStore from './dummy-store';

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
        <Route path='/' component={SideBar} />
        <Route path='/' component={Header} />
        <Route path='/' component={NotesMain} />
      </div>

    );

  }
}

export default App;
