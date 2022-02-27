import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import './header.css';
import { getAuth } from 'firebase/auth';

const HeaderElement = () => {
    return (
        <div className="header">    
            <NavLink to="/home" className="nav-link-home">Neptune</NavLink>
            <NavLink to="/marketplace" className="nav-link-other">Marketplace</NavLink>
            <NavLink to="/home" className="nav-link-other">Support</NavLink>
            <NavLink to="/home" className="nav-link-other">Manage Cards</NavLink>
            <input placeholder= "Search for users or cards" className="search-bar" />
            <NavLink to="/home" className="nav-link-pfp"><img src={getAuth().currentUser.photoURL} alt="Profile Picture" className='pfp'></img></NavLink>
        </div>
    );
}

export default HeaderElement;