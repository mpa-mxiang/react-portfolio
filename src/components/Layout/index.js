import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Layout = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <h1>Jiachun</h1>
      </Link>
    </div>
  );
}

export default Layout;
