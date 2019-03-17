import React from 'react';
import { Route } from "react-router-dom";
import CreateAdvertisement from "./CreateAdvertisement";
import ListAdvertisement from "./ListAdvertisement";
import EditAdvertisement from "./EditAdvertisement";
import NotFound from "../../Authorized/NotFound";

const AdvertisementWrapper = () => {

	return (
		<div>
			<Route path="/advertisement/list" component={ListAdvertisement} />
			<Route path="/advertisement/create" component={CreateAdvertisement} />
			<Route path="/advertisement/edit" component={EditAdvertisement} />
			<Route component={NotFound} />
		</div>
	)
};

export default AdvertisementWrapper;
