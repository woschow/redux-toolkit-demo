import * as React from "react";
import {IReduxToolkitDemoProps} from "./IReduxToolkitDemoProps";
import "bootstrap/dist/css/bootstrap.css";

import {HashRouter, Route, Switch} from "react-router-dom";

import PostsAPIContainer from "./pages/post/PostsAPIContainer";
import PostsSliceContainer from "./pages/post/PostsSliceContainer";

import PageNotFound from "./pages/errors/PageNotFound";
import Header from "../shared/Header";
import {Provider} from "react-redux";
import {setupStore} from "../store";
import Counter from "./pages/counter/Counter";

const store = setupStore();

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
                <HashRouter>
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
                </HashRouter>
            </Provider>
        );
    }
}


