import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
      </li>

      <li id="rw">{props.correctIncorrect}</li>

      <li>Current Score: {props.score}</li>

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
