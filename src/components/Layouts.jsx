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

const Layouts = (props) => (
	<Router>
		<div>
			<Route exact path="/" component={Login} />
			<Route path="/login"
			       render={() => (<Login cookies={props.cookies}/>)}
			/>
			<Route
				path="/register"
				render={() => (<Register cookies={props.cookies}/>)}
			/>
			<Route path="/forgotpassword" component={ForgotPassword} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/advertisement/list" component={ListAdvertisement} />
			<Route path="/advertisement/create" component={CreateAdvertisement} />
			<Route path="/advertisement/edit" component={EditAdvertisement} />
			<Route path="/settings/profile" component={Profile} />
			<Route path="/notfound" component={NotFound} />
		</div>
	</Router>
);

export default withCookies(Layouts);
