import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../containers/Home'

import LoginPage from '../containers/LoginPage';


const Routes = (props) => (

        <Switch>
            <Route
                exact path="/"
                render={(routeProps) => (
                    <Home {...props} {...routeProps} />
                )}
            />
<Route path="/tutu" component="LoginPage"/>
            <Route path="/login"
                render={(routeProps) => (props.loggedIn ? (
                    <Redirect to="/" />
                ) : (
                        <LoginPage {...props} {...routeProps} />
                    )

                )} />
        </Switch>


)


export default Routes