import React, { Component } from "react";

//stateless funtional component

const NavBar = (props) => {
  console.log("navbar rendered");
  const totalCounters = props.totalCounters;

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
