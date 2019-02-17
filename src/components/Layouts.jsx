import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
 import ForgotPassword from './ForgotPassword/ForgotPassword';

const Layouts = () => (
	<Router>
		<div>
			<Route exact path="/" component={Login} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgotpassword" component={ForgotPassword} />
		</div>
	</Router>
);

export default Layouts;
