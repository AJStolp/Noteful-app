import React from 'react';
import './sideBar.css';
import Folder1 from '../folders/folders1';
import Folder2 from '../folders/folders2';
import Folder3 from '../folders/folders3';
import AddFolder from '../folders/addFolder';

const sideBar = () => {
    return (
        <div className='sideBar'>
            <Folder1 /><br />
            <Folder2 /><br />
            <Folder3 /><br />
            <AddFolder />
        </div>
    )
}

export default sideBar