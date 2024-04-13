import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
          <h4 className="text-white font-bold ml-2">Wemonly</h4>
        </div>
       
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/new-dep/home" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/new-dep/calendar" className="text-white hover:text-gray-300">
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/new-dep/safety" className="text-white hover:text-gray-300">
              Safety
            </Link>
          </li>
        </ul>
        <Link to="/new-dep/" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
      </div>
    </nav>
  );
};

export default NavBar;
