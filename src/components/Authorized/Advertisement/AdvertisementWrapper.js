import React from 'react';
import { Route } from "react-router-dom";
import CreateAdvertisement from "./CreateAdvertisement";
import ListAdvertisement from "./ListAdvertisement";
import EditAdvertisement from "./EditAdvertisement";
import ViewAdvertisement from "./ViewAdvertisement";
import MyAdvertisement from "./MyAdvertisement";

const AdvertisementWrapper = () => {

	return (
		<div>
			<Route path="/advertisement/list" component={ListAdvertisement} />
			<Route path="/advertisement/create" component={CreateAdvertisement} />
			<Route path="/advertisement/my" component={MyAdvertisement} />
			<Route path="/advertisement/edit/:id" component={EditAdvertisement} />
			<Route path="/advertisement/view/:id" component={ViewAdvertisement} />
		</div>
	)
};

export default AdvertisementWrapper;
