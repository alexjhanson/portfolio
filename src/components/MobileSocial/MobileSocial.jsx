import './MobileSocial.scss';

import { NavLink } from "react-router-dom"


export default function MobileSocial(props) {
    return (
        <>
            <hr />
            <div className="mobile-social">
                <ul className="mobile-social__links">
                    <li className="mobile-social__link">
                        <a href="https://www.linkedin.com/in/alexjhanson1589/" target="_blank" rel="noreferrer">
                            <svg className="linkedIn-icon scale-icon mobile-social__icon">
                                <use xlinkHref="sprite.svg#icon-linkedin" />
                            </svg>
                        </a>
                    </li>
                    <li className="mobile-social__link">
                        <a href="https://github.com/alexjhanson?tab=repositories" target="_blank" rel="noreferrer">
                            <svg className="github-icon scale-icon mobile-social__icon">
                                <use xlinkHref="sprite.svg#icon-github" />
                            </svg>
                        </a>
                    </li>
                    <li className="mobile-social__link">
                        <NavLink to="/contact">
                            <svg className="mail-icon scale-icon mobile-social__icon">
                                <use xlinkHref="sprite.svg#icon-envelop" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className="mobile-social__link">
                        <a href="https://github.com/alexjhanson?tab=repositories" target="_blank" rel="noreferrer">
                            <svg className="github-icon scale-icon mobile-social__icon">
                                <use xlinkHref="sprite.svg#icon-profile" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}