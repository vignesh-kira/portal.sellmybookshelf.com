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
			</React.Fragment>
		);
	}
}

export default Dashboard;
