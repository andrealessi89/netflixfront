import React from "react";
import './Header.css';

const Header = ({black}) => {
    return(
        <header className={black ? "blackk" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                </a>
            </div>
        </header>
    )

}

export default Header