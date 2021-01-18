import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand" >PhotoShow</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" > About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link" > Profile</Link>
                    </li>
                </ul>
                <Search />
            </div>
        </nav>
    </div>
  )
}

export default Header;