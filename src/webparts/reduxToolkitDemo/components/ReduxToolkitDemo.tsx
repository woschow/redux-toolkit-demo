import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import { IReduxToolkitDemoProps } from "./IReduxToolkitDemoProps";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostsAPIContainer from "./pages/post/PostsAPIContainer";
import PostsSliceContainer from "./pages/post/PostsSliceContainer";

import { Provider } from "react-redux";
import Header from "../shared/Header";
import Counter from "./pages/counter/Counter";
import PageNotFound from "./pages/errors/PageNotFound";

import { store } from "../store";


export default class ReduxToolkitDemo extends React.Component<IReduxToolkitDemoProps, {}> {
    public render(): React.ReactElement<IReduxToolkitDemoProps> {
        const {
            description,
            isDarkTheme,
            environmentMessage,
            hasTeamsContext,
            userDisplayName,
        } = this.props;

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Counter}/>
                                <Route exact path="/slice" component={PostsSliceContainer}/>
                                <Route exact path="/rtk" component={PostsAPIContainer}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}


