import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import MainDashboard from './MainDashboard'

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				{/* Wrapper */}
				<MainDashboard />

				{/* Scroll to Top Button */}
				<a className="scroll-to-top rounded" href="#page-top">
					<i>
						<FontAwesomeIcon icon={faAngleUp} />
					</i>
				</a>

				{/* Logout Modal */}
				<div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
				     aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
								<button className="close" type="button" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">Select "Logout" below if you are ready to end your current
								session.
							</div>
							<div className="modal-footer">
								<button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
								<a className="btn btn-primary" href="login.html">Logout</a>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dashboard;
