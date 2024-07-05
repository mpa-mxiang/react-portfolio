import React from 'react'
import { FaReact, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {HIX} from 'react-icons/hi';
const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(fasle);
  
  const handleIcon = () => {
    setToggleIcon(!toggleIcon)
  }
  return (
    <div>
      <nav className="navbar">
        <div className='navbar__container'>
            <Link to={'/'} className='navbar__container-logo'>
                <FaReact size={30} />
            </Link>
        </div>
        <ul className='navbar__container__menu'>
            {
                data.map((item) => (
                    <li key={key} className='navbar__container__menu__item'>
                        <Link className='navbar__container__menu__item__links' to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <div className='nav-icon' onClick={handleIcon}>
            {
                toggleIcon ? <HIX size={30} /> : <FaBars size={30} />
            }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
