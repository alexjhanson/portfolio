import './Navigation.scss';

import { NavLink } from 'react-router-dom';

export default function Navigation({mobile}) {
    
    return(
            <nav className="nav">
                <ul className="nav__links">
                    <li><NavLink className={({isActive}) => isActive && !mobile ? 'nav__link active-nav-link': 'nav__link'} to='/about'>About</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && !mobile? 'nav__link active-nav-link': 'nav__link'} to='/projects'>Projects</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && !mobile? 'nav__link active-nav-link': 'nav__link'} to='/music'>Music</NavLink></li>
                </ul>
            </nav>
    );
}