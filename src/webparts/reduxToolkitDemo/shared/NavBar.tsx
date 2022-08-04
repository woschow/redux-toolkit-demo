import * as React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-10">
      <span className="navbar-brand p-1">ReduxToolkit Demo</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#/users">
            Users
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/posts">
            Posts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
