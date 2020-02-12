import React from 'react';
// import {Route} from 'react-router-dom';
import Header from './header';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );

  }
}

export default App;
