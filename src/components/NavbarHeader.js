import React from 'react';
import { Link } from 'react-router-dom';

function NavbarHeader() {
    return (
        <div>
            <Link to='/search-name'><i className="fas fa-user-alt"></i></Link>
            <Link to='/search-company'><i className="far fa-building"></i></Link>
            <Link to='/add-name'><i className="fas fa-user-plus"></i></Link>
            <Link to='/add-company'><i className="fas fa-plus"></i></Link>
        </div>
    )
}

export default NavbarHeader;