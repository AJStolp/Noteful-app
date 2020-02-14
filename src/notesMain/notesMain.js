import React from 'react';
import Notes from '../notes/notes';
import dummyStore from '../dummy-store';
import Moment from 'react-moment';

class notesMain extends React.Component {
    time = () => {
         dummyStore.notes.map(val => (val.modified));
    }

    render() {
        return (
            <div>
                <Notes time={this.time}/>
            </div>
        )
    }
}

export default notesMain;