import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';



const header = () => {
    return (
        <header className='header'>
            <Link to='/' style={{textDecoration: 'none'}}>Noteful</Link>
        </header>
    )
}

export default header