import './Navigation.scss';

import { NavLink } from 'react-router-dom';

export default function Navigation(props) {
    
    return(
            <nav className="nav">
                <ul className="nav__links">
                    <li className='nav__link'><NavLink to='/about'>About</NavLink></li>
                    <li className='nav__link'><NavLink to='/projects'>Projects</NavLink></li>
                    <li className='nav__link'><NavLink to='/music'>Music</NavLink></li>
                </ul>
            </nav>
    );
}