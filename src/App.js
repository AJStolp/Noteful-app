import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from './NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';
import APIContext from './APIContext'
import AddNote from './AddNote/AddNote'
import config from './config'
import AddFolder from './AddFolder/AddFolder'
import './App.css';

class App extends Component {
  
  state = {
      folders: [],
      notes: [],
    }
  
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({notes, folders});
        
      })
      .catch(error => {
        console.error({error});
      });


  }

  refreshPage = () => {
    window.location.reload(false)
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  handleNoteAdd = addNote => {
    const pushNote = this.state.notes.concat(addNote);
    this.setState({
      notes: pushNote,
    })
  }

  handleFolderData = (event) => {
    event.preventDefault();
    this.setState({
      folders: event.target.value,
    })

  }

  handleFolderSubmit = (folderSubmit) => {
    this.setState({
      folders: [...this.state.folders, folderSubmit],
    })
  }


  renderNavRoutes() {

    return(
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={NoteListNav}
            />
        ))}
        <Route 
          path="/note/:noteId"
          component={NotePageNav}
          />
          <Route 
            path="/add-folder" 
            component={NotePageNav} />
          <Route 
            path="/add-note" 
            component={AddNote} 
            handleFolderData = {this.handleFolderData}
            onSubmit = {noteSubmit => this.handleNoteAdd(noteSubmit)}
            />
      </> 
    );
  }



  renderMainRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={NoteListMain}
          />
        ))}
        <Route
          path="/note/:noteId"
          component={NotePageMain}
        />
        <Route path='/add-Folder' component={AddFolder} />

      </>
    );
  }

  


  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addNote: this.handleNoteAdd,
      addFolder: this.handleFolderSubmit
    };
    return (

        <APIContext.Provider value={value} addNote={this.handleNoteAdd} addFolder={this.handleFolderSubmit} refreshPage={() => this.refreshPage}>
            <div className="App">
              <nav className="App_nav">{this.renderNavRoutes()}</nav>
              <header>
                <h1>
                  <Link to="/">Noteful</Link>{' '}
                  <FontAwesomeIcon icon="check-double" />
                </h1>
              </header>
              <main className="App_main">{this.renderMainRoutes()}</main>
            </div>
        </APIContext.Provider>



    );
  }

}

export default App;
