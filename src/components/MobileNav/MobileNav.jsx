import './MobileNav.scss';

import { NavLink } from 'react-router-dom';

export default function MobileNav(props) {
    
    return(
        <nav className="mobile-nav">
            <ul className="mobile-nav__links">
                <li><NavLink to='/about' className='mobile-nav__link'>About</NavLink></li>
                <li><NavLink to='/projects' className='mobile-nav__link'>Projects</NavLink></li>
                <li><NavLink to='/music' className='mobile-nav__link'>Music</NavLink></li>
            </ul>
        </nav>
    );
}