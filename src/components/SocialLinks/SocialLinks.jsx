import './SocialLinks.scss';

import { NavLink } from "react-router-dom"


export default function MobileSocial(props) {
    return (
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
                {props.mobile ?   
                    <li className="social__link">
                        <a href="https://github.com/alexjhanson?tab=repositories" target="_blank" rel="noreferrer">
                            <svg className="github-icon scale-icon social__icon">
                                <use xlinkHref="sprite.svg#icon-profile" />
                            </svg>
                        </a>
                    </li>
                    : null
                }
            </ul>
        </div>
    )
}
