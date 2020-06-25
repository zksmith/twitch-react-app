import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { getFeaturedStreams } from "../../actions/twitchActions";
import "./Sidebar.css";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "white" : "inherit",
        },
      };
    }}
  />
);

const Sidebar = ({ getFeaturedStreams, featuredStreams }) => {
  useEffect(() => {
    getFeaturedStreams();
  }, [getFeaturedStreams]);
  return (
    <aside className="sidebar">
      <nav>
        <h1 className="logo">
          <Link to="/">tra</Link>
        </h1>
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
    </aside>
  );
};

const mapStateToProps = (state) => ({
  featuredStreams: state.twitch.featuredStreams,
});

export default connect(mapStateToProps, { getFeaturedStreams })(Sidebar);
