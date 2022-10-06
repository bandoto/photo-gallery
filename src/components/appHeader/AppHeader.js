import { Link } from "react-router-dom"

import './appHeader.scss'

const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Link to="/" className="header__title">Photo Gallery</Link>
                    <ul className="header__list">
                        <li>1</li>
                        <Link to="/likes">Likes</Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;