import React, { Component } from "react";
import "./Sidebar.css";
import NavLink from "./NavLink.js";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <h1 className="logo">tra</h1>
        <button className="btn stream-btn">● Start Stream </button>
        <ul className="sidebar-links">
          <li>
            <NavLink to="/">⇨ Home Page</NavLink>
          </li>
          <li>
            <NavLink to="streams">⇨ Streams</NavLink>
          </li>
          <li>
            <NavLink to="games">⇨ Games</NavLink>
          </li>
          <li>⇨ Twitch Store</li>
          <li>⇨ Get Desktop</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
