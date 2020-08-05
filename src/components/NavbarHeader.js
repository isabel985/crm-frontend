import React from 'react';
import { Link } from 'react-router-dom';

function NavbarHeader() {
    return (
        <div>
            <ul className="nav-header">
                <li>
                    <Link to='/'><i className="fas fa-home"></i> Home</Link>
                </li>
                <li>
                    <Link to='/search-name'><i className="fas fa-user-alt"></i> Search</Link>
                </li>
                <li>
                    <Link to='/search-company'><i className="far fa-building"></i> Search</Link>
                </li>
                <li>
                    <Link to='/add-name'><i className="fas fa-user-plus"></i> Add New</Link>
                </li>
                <li>
                    <Link to='/add-company'><i className="far fa-building"></i>+ Add New</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarHeader;