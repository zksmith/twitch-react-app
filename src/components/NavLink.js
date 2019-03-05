import React, { Component } from "react";
import { Link } from "@reach/router";

//used to give active styling to active sidebar link
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#b9c1b6" : "inherit"
        }
      };
    }}
  />
);

export default NavLink;
