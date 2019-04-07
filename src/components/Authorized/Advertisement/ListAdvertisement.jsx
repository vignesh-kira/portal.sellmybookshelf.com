import React, {Component} from 'react';
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {advertisementsListFetch} from "../../../actions/portal";
import {API_SUCCESS} from "../../../constants/common";

class ListAdvertisement extends Component {
	componentDidMount() {
		this.props.advertisementsListFetch();
	}
	render() {
		const { advertisementsListFetchStatus, advertisementsList } = this.props;
	
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
							<PageTitle title="Advertisement List"/>

							{/* Content Row */}
							<div className="row">

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

const mapStateToProps = (state, ownProps) => ({
	user: state.login.user,
	cookies: ownProps.cookies,
	advertisementsList: state.login.advertisementsList,
	advertisementsListFetchStatus: state.login.advertisementsListFetchStatus
});

const mapDispatchToProps = {
	advertisementsListFetch
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ListAdvertisement));
