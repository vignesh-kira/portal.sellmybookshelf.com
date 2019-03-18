import React from 'react';
import { withCookies } from 'react-cookie';
import UnAuthorizedRouter from "../routes/UnAuthorized";
import AuthorizedUserRouter from "../routes/Authorized/User";

const Layouts = (props) => {
	const userCookie = props.cookies.get('user');

	return userCookie && userCookie !== "null"
		?
		(<AuthorizedUserRouter />)
		:
		(<UnAuthorizedRouter />)
};

export default withCookies(Layouts);
