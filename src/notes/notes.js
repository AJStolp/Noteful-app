import React from 'react';
import './notes.css';
import dummyStore from '../dummy-store';
import Moment from 'react-moment';

const notes = () => {
    const dateToFormat = new Date('1976-04-19T12:59-0500');


    const note = dummyStore.notes.map( (value, i) => (
        <ul key={i} className='notes'>
            <li className='notesLi'>
                {value.name}
                {value.modified}
            </li>
        </ul>
    ));

    return (
        <div>
            {note}
        </div>
    )
}

export default notes