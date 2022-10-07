import { Link, NavLink } from "react-router-dom"

import './appHeader.scss'

const AppHeader = () => {

    const activeStyles = {
        textDecoration: 'underline'
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Link to="/" className="header__title">Photo Gallery</Link>
                    <ul className="header__list">
                        <li>
                            <NavLink 
                                to="/"
                                style={({isActive}) => isActive ? activeStyles : undefined}
                                >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/likes"
                                style={({isActive}) => isActive ? activeStyles : undefined}
                                  >
                                Likes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;