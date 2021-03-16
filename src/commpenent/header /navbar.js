import React from 'react';
import { Link } from 'react-router-link';

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-sm navbar-light bg-danger">
            <Link className="navbar-brand" to="/">Bokémon API</Link>

         
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-Link" to="#"> </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-Link" to="#"></Link>
                    </li>
                    
                </ul>

           
        </nav>

    )
}

export default Navbar;