import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'

const MainDashboard = (props) => (
	<div id="wrapper">
		{/* Sidebar */}
		<SideNav />
		{/* End of Sidebar */}

		{/* Content Wrapper */}
		<div id="content-wrapper" className="d-flex flex-column">

			{/* Main Content */}
			<div id="content">

				{/* Topbar */}
				<TopNav />
				{/* End of Topbar */}

				{/* Begin Page Content */}
				<div className="container-fluid">

					{/* Page Heading */}
					<PageTitle title="Dashboard" />

					{/* Content Row */}
					<div className="row">

						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
												BOOKS BOUGHT
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-calendar fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">
												BOOKS SOLD
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-comments fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-info shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div
												className="text-xs font-weight-bold text-info text-uppercase mb-1">
												My Advertisements
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-comments fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
												Total Earnings
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">&#8377; 0</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-comments fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Content Row */}
					<div className="row">

						{/* Content Column */}
						<div className="col-lg-6 mb-4">

							{/* Color System */}
							<div className="row">
								<div className="col-lg-6 mb-4">
									<Link to="/advertisement/list" className="btn btn-danger btn-lg btn-icon-split" style={{padding: '20px 100px'}}>
										<span className="text">Buy A Book</span>
									</Link>
								</div>
								<div className="col-lg-6 mb-4">
									<Link to="/advertisement/create" className="btn btn-success btn-lg btn-icon-split" style={{padding: '20px 100px'}}>
										<span className="text">Sell A Book</span>
									</Link>
								</div>
							</div>

						</div>

						<div className="col-lg-6 mb-4">

							{/* Approach */}
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">
										<i style={{marginRight:'5px'}}>
											<FontAwesomeIcon icon={faBell} />
										</i>
										<span>Notification</span>
									</h6>
								</div>
								<p>You will receive new notifications here</p>
								{/*<ul className="text-left" style={{paddingLeft: '10px;'}}>*/}
									{/*<li>Your book has been reserved by 8th Class student</li>*/}
									{/*<li>Your book has was bought by 8th Class student</li>*/}
								{/*</ul>*/}
							</div>

						</div>
					</div>
				</div>
				{/* /.container-fluid */}
			</div>
			{/* End of Main Content */}

			{/* Footer */}
			<Footer />
			{/* End of Footer */}

		</div>
		{/* End of Content Wrapper */}


	</div>
);


export default MainDashboard;

