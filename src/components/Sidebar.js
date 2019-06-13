import React from "react";
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

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h1 className="logo">
        <Link to="/">tra</Link>
      </h1>
      <button className="btn stream-btn">● Start Stream </button>
      <ul className="sidebar-links">
        <li>
          <NavLink to="/" title="Home Page">
            <i className="fas fa-home" />{" "}
            <span className="sidebar-text">Home Page</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="streams" title="Streams">
            <i className="fas fa-video" />{" "}
            <span className="sidebar-text">Streams</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="games" title="Games">
            <i className="fas fa-gamepad" />{" "}
            <span className="sidebar-text"> Games</span>
          </NavLink>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/zksmith/twitch-react-app"
            rel="noopener noreferrer"
            title="Github"
          >
            <i className="fab fa-github" />{" "}
            <span className="sidebar-text">Github</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
