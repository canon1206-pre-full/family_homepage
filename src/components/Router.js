import reactDom from "react-dom";
import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Main from "../routes/Main";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                {
                    isLoggedIn ?
                    <>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    </> : 
                    <Route exact path="/">
                        <Auth />
                    </Route>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;