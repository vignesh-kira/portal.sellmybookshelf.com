import React from 'react';
import {Route, Switch} from "react-router-dom";
import {withCookies} from "react-cookie";
import Dashboard from "../../components/Authorized/Dashboard/Dashboard";
import AdvertisementWrapper from "../../components/Authorized/Advertisement/AdvertisementWrapper";
import SettingsWrapper from "../../components/Authorized/Settings/SettingsWrapper";
import AuthorizedNotFound from "../../components/Authorized/NotFound";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const User = (props) => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => (<Dashboard cookies={props.cookies}/>)}
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
				path="/dashboard"
				render={() => (<Dashboard cookies={props.cookies}/>)}
			/>
			<Route
				path="/advertisement"
				render={() => (<AdvertisementWrapper cookies={props.cookies}/>)}
			/>
			<Route
				path="/settings"
				render={() => (<SettingsWrapper cookies={props.cookies}/>)}
			/>
			<Route
				component={AuthorizedNotFound}
			/>
		</Switch>
	)
};

export default withCookies(User);
