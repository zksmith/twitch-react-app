import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <h1 className="logo">tra</h1>
        <button className="btn stream-btn">● Start Stream </button>
        <ul className="sidebar-links">
          <li class="active">⇨ Home Page</li>
          <li>⇨ Channels</li>
          <li>⇨ Games</li>
          <li>⇨ Twitch Store</li>
          <li>⇨ Get Desktop</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
