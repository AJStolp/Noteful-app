  
import React from 'react';
import './notes.css';
import dummyStore from '../dummy-store';
import Moment from 'react-moment';

const notes = (props) => {
    const note = dummyStore.notes.map( (value, i) => (
        <ul key={i} className='notes'>
            <li>
                Note 1 <br />
                {value.name}<br />
                <Moment>
                    {value.modified}
                </Moment>
            </li>
        </ul>
    ));

    return (
        <div className='notesLi'>
            {note}
            <button className='noteButton'>
                Add Note
            </button>
        </div>
    )
}

export default notes

