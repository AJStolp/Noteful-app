import React from 'react';
import './notes.css';
import dummyStore from './dummy-store';

const notes = () => {
    const note = dummyStore.notes.map( (value, i) => (
        <ul key={i}>
            <li>
                {value.name}
                {value.content}
            </li>
        </ul>
    ));

    return (
        <div>

        </div>
    )
}

export default notes