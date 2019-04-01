import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Sidebar.css";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "white" : "inherit"
        }
      };
    }}
  />
);

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
          <li>⇨ Top Clips</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
