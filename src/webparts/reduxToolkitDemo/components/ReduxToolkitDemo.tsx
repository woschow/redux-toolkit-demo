import * as React from "react";
import styles from "./ReduxToolkitDemo.module.scss";
import { IReduxToolkitDemoProps } from "./IReduxToolkitDemoProps";
import { escape } from "@microsoft/sp-lodash-subset";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { IUser } from "../models/IUser";

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
      <>
        <h1 className="">ReduxToolkit Demo</h1>
        <div className="container">
          Content
        </div>
      </>
    );
  }
}
