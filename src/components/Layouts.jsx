import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies } from 'react-cookie';
import Login from './Login/Login';
import Register from './Register/Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Dashboard from "./Authorized/Dashboard/Dashboard";
import CreateAdvertisement from "./Authorized/Advertisement/CreateAdvertisement";
import NotFound from "./Authorized/NotFound";
import ListAdvertisement from "./Authorized/Advertisement/ListAdvertisement";
import EditAdvertisement from "./Authorized/Advertisement/EditAdvertisement";
import Profile from "./Authorized/Settings/Profile";

const Layouts = (props) => {
	const userCookie = props.cookies.get('user');

	return (
		<Router>
			<div>
				<Route exact path="/"
				       render={() => (<Login cookies={props.cookies}/>)}
				/>
				<Route path="/login"
				       render={() => (<Login cookies={props.cookies}/>)}
				/>
				<Route
					path="/register"
					render={() => (<Register cookies={props.cookies}/>)}
				/>
				<Route path="/forgotpassword" component={ForgotPassword} />

				{
					userCookie
						? (
							<React.Fragment>
								<Route path="/dashboard"
								       render={() => (<Dashboard cookies={props.cookies}/>)}
								/>
								<Route path="/advertisement/list" component={ListAdvertisement} />
								<Route path="/advertisement/create" component={CreateAdvertisement} />
								<Route path="/advertisement/edit" component={EditAdvertisement} />
								<Route path="/settings/profile" component={Profile} />
								<Route path="/notfound" component={NotFound} />
							</React.Fragment>
						)
						: (
							<React.Fragment>
								<Route path="/notfound" component={NotFound} />
							</React.Fragment>
						)
				}

			</div>
		</Router>
	)
};

export default withCookies(Layouts);
