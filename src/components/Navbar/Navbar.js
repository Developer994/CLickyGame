import React from 'react';
import './Navbar.css';

var Navbar = props => (
    <div className="navbar ">
        <div>The Memory Game</div>
        <div className={props.navMsgColor}>{props.navMessage} </div>
        <div>
            Score: {props.score} <span className="pipe"></span> High Score: {props.highScore}
        </div>
    </div >
)

export default Navbar;