import * as React from "react";
import * as strings from "ReduxToolkitDemoWebPartStrings";

const Header = () => {
  return (
      <>
          <h2>{strings.AppTitle}</h2>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-10">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#/">
                          {strings.ReduxBasics}
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#/slice">
                          {strings.PostsContainerSliceTitle}
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#/rtk">
                          {strings.PostsContainerAPITitle}
                      </a>
                  </li>
              </ul>
          </nav>
      </>

  );
};

export default Header;
