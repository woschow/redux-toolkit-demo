import * as React from "react";
import { Link } from "react-router-dom";
import * as strings from "ReduxToolkitDemoWebPartStrings";

const Header = () => {
  return (
    <>
      <h2>{strings.AppTitle}</h2>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-10">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {strings.ReduxBasics}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/slice">
              {strings.PostsContainerSliceTitle}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rtk">
              {strings.PostsContainerAPITitle}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
