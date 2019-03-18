import React from 'react';
import {Route, Switch} from "react-router-dom";
import {withCookies} from "react-cookie";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import UnAuthorizedNotFound from "../components/UnAuthorized/NotFound";

const UnAuthorized = (props) => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => (<Login cookies={props.cookies}/>)}
			/>
			<Route
				path="/login"
				render={() => (<Login cookies={props.cookies}/>)}
			/>
			<Route
				path="/register"
				render={() => (<Register cookies={props.cookies}/>)}
			/>
			<Route
				path="/forgotpassword"
				render={() => (<ForgotPassword cookies={props.cookies}/>)}
			/>
			<Route
				component={UnAuthorizedNotFound}
			/>

		</Switch>
	)
};

export default withCookies(UnAuthorized);
