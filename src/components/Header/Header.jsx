import './Header.scss';

import { NavLink } from 'react-router-dom';

export default function Header(props) {

    return (
        <header className='header'>
            <nav className="navigation">
                <ul className="navigation__links">
                    <li><NavLink to='/about' className='navigation__link'>About</NavLink></li>
                    <li><NavLink to='/projects' className='navigation__link'>Projects</NavLink></li>
                    <li><NavLink to='/music' className='navigation__link'>Music</NavLink></li>
                </ul>
            </nav>
            <div className="social">
                <ul className="social__links">
                    <li className="social__link">
                        <a href="https://www.linkedin.com/in/alexjhanson1589/" target="_blank" rel="noreferrer">
                            <svg className="linkedIn-icon scale-icon social__icon">
                                <use xlinkHref="sprite.svg#icon-linkedin" />
                            </svg>
                        </a>
                    </li>
                    <li className="social__link">
                        <a href="https://github.com/alexjhanson?tab=repositories" target="_blank" rel="noreferrer">
                            <svg className="github-icon scale-icon social__icon">
                                <use xlinkHref="sprite.svg#icon-github" />
                            </svg>
                        </a>
                    </li>
                    <li className="social__link">
                        <NavLink to="/contact">
                            <svg className="mail-icon scale-icon social__icon">
                                <use xlinkHref="sprite.svg#icon-envelop" />
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}