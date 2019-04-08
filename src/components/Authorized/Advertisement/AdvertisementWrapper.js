import React from 'react';
import { Route } from "react-router-dom";
import CreateAdvertisement from "./CreateAdvertisement";
import ListAdvertisement from "./ListAdvertisement";
import EditAdvertisement from "./EditAdvertisement";
import ViewAdvertisement from "./ViewAdvertisement";

const AdvertisementWrapper = () => {

	return (
		<div>
			<Route path="/advertisement/list" component={ListAdvertisement} />
			<Route path="/advertisement/create" component={CreateAdvertisement} />
			<Route path="/advertisement/edit/:id" component={EditAdvertisement} />
			<Route path="/advertisement/view/:id" component={ViewAdvertisement} />
		</div>
	)
};

export default AdvertisementWrapper;
