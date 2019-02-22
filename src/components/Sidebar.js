import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <h1 className="logo">tra</h1>
        <button className="btn stream-btn">● Start Stream </button>
        <ul className="sidebar-links">
          <li className="active">
            <Link to="/">⇨ Home Page</Link>
          </li>
          <li>
            <Link to="channels">⇨ Channels</Link>
          </li>
          <li>
            <Link to="games">⇨ Games</Link>
          </li>
          <li>⇨ Twitch Store</li>
          <li>⇨ Get Desktop</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
