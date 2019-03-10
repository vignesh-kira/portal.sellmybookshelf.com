import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies } from 'react-cookie';
import Login from './Login/Login';
import Register from './Register/Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Dashboard from "./Authorized/Dashboard";

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
		</div>
	</Router>
);

export default withCookies(Layouts);
