import React from 'react';
// import {Route} from 'react-router-dom';
import Header from './header';
import { render } from '@testing-library/react';
import SideBar from './sideBar/sideBar';
import DummyStore from './dummy-store';
import Notes from './notes/notes';
import Moment from 'moment';
import NotesMain from './notesMain/notesMain';
import dummyStore from './dummy-store';

class App extends React.Component {
//   foldersData = () => {
//     dummyStore.folders.map( (val, i) => 
//     <ul key={i}>
//       <li>
//         {val.name}
//         {val.id}
//       </li>
//     </ul>

//     );
// }

  // notesData = () => {
  //   dummyStore.notes.map( (value, index) => 
  //   <ul key={index}>
  //     <li>
  //       {value.name}
  //       <Moment>
  //         {value.modified}
  //       </Moment>
  //     </li>
  //   </ul>
  //   );
  // }


  constructor() {
    super();
    this.state = {
        folders: this.foldersData,
        notes: this.notesData,
    }
  }
  
  render() {
    return (
      <div className="App">
          <Header />
          <SideBar />
          <NotesMain />
      </div>

    );

  }
}

export default App;
