import React, { useState } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './styles.scss';

const data = [
  {
    label: 'HOME',
    to: '/',
  },
  {
    label: 'ABOUT',
    to: '/about',
  },
  {
    label: 'PROJECTS',
    to: '/projects',
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item) => (
            <li key={item.label} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="nav-icon"
          onClick={handleIcon}
          tabIndex={0}
          role="button"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleIcon();
            }
          }}
        >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
