import * as React from "react";
import styles from "./ReduxToolkitDemo.module.scss";
import { IReduxToolkitDemoProps } from "./IReduxToolkitDemoProps";
import { escape } from "@microsoft/sp-lodash-subset";
import "bootstrap/dist/css/bootstrap.css";

import {HashRouter, Route, Switch } from  "react-router-dom";

import PostsContainer from "./pages/posts/PostsContainer";
import UsersContainer from "./pages/users/UsersContainer";
import PageNotFound from "./pages/errors/PageNotFound";
import NavBar from "../shared/NavBar";
import MessageBar from "../shared/MessageBar";

export default class ReduxToolkitDemo extends React.Component<
  IReduxToolkitDemoProps,
  {}
> {
  public render(): React.ReactElement<IReduxToolkitDemoProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (

       <HashRouter>
        <div className="container">
         
          <NavBar/>
          <MessageBar text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, tempore!" status="info"/>
          <div className="container">
          <Switch>
              <Route exact path="/" component={PostsContainer}/>
              <Route exact path="/posts" component={PostsContainer}/>
              <Route exact path="/users" component={UsersContainer}/>
              <Route component={PageNotFound} />
          </Switch>
          </div>
        </div>
      </HashRouter>

    );
  }
}
