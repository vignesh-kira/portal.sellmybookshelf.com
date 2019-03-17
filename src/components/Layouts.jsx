import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withCookies } from 'react-cookie';

import Login from './Login/Login';
import Register from './Register/Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';

import Dashboard from "./Authorized/Dashboard/Dashboard";
import AdvertisementWrapper from "./Authorized/Advertisement/AdvertisementWrapper";
import SettingsWrapper from "./Authorized/Settings/SettingsWrapper";
import AuthorizedNotFound from "./Authorized/NotFound";

import UnAuthorizedNotFound from "./UnAuthorized/NotFound";

const Layouts = (props) => {
	const userCookie = props.cookies.get('user');
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

			{
				userCookie
					?  (
						<>
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
						</>
					)
					:
					<Route
						component={UnAuthorizedNotFound}
					/>
			}

		</Switch>
	)
};

export default withCookies(Layouts);
