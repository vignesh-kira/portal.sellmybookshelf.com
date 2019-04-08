import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {advertisementView} from "../../../actions/portal";
import {API_SUCCESS} from "../../../constants/common";
import "../../../styled/common.css";
import book from "../../../images/book.png";

class ViewAdvertisement extends Component {
	componentDidMount() {
		const { match: { params : {id} } } = this.props;

		this.props.advertisementView({id});
	}
	render() {
		const { advertisementViewStatus, advertisement } = this.props;

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

							{/* Page Heading */}
							<PageTitle title="Advertisement View"/>

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

const mapStateToProps = (state, ownProps) => ({
	cookies: ownProps.cookies,
	advertisement: state.login.advertisement,
	advertisementViewStatus: state.login.advertisementViewStatus
});

const mapDispatchToProps = {
	advertisementView
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ViewAdvertisement));
