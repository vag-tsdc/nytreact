import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="fixed-action-btn horizontal click-to-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          NYT Article Scraper
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
