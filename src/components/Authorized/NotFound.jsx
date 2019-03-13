import React, {Component} from 'react';
import SideNav  from './common/SideNav'
import TopNav  from './common/TopNav'
import Footer  from '../Shared/Footer'
import {Link} from "react-router-dom";

class NotFound extends Component {
	render() {
		return (
			<div id="wrapper">
				{/* Sidebar */}
				<SideNav/>
				{/* End of Sidebar */}

				{/* Content Wrapper */}
				<div id="content-wrapper" className="d-flex flex-column">

					{/* Main Content */}
					<div id="content">

						{/* Topbar */}
						<TopNav/>
						{/* End of Topbar */}

						{/* Begin Page Content */}
						<div className="container-fluid">
							{/* 404 Error Text */}
							<div className="text-center">
								<div className="error mx-auto" data-text="404">404</div>
								<p className="lead text-gray-800 mb-5">Page Not Found</p>
								<p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
								<Link to="/dashboard">&larr; Back to Dashboard</Link>
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
	}
}
export default NotFound;

