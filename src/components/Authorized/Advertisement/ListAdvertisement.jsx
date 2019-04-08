import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {advertisementsListFetch} from "../../../actions/portal";
import {API_SUCCESS} from "../../../constants/common";
import "../../../styled/common.css";
import book from "../../../images/book.png";

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

							<div className="col-md-12 text-left"
							     style={{
								     border: '1px solid rgba(0, 0, 0, 0.125)',
								     borderRadius: '5px',
								     padding: '30px'
							     }}>
								{/* Books Count Section */}
								<div className="row">
									<h6 className="text-left">1 to 10 of 100 books are listed.</h6>
								</div>

								{/* Books Advertisement Section */}
								<div className="row advertisementWrapper">
									<div className="card col-md-12 no-padding">
										<div
											className="card-body"
											style={{
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'space-between'
											}}>
											<div style={{display: 'flex'}}>
												<img
													src={book} width='100' height='100'
													style={{marginTop: '-10px'}}
												/>
												<div>
													<h5 className="card-title">&#8377; 320</h5>
													<p className="card-text">
														10th Class
														<br />
														Science Book
														<br />
														<span className="badge badge-pill badge-primary">Available</span>
													</p>
												</div>
											</div>
											<button
												style={{alignSelf: 'center'}}
												className="btn btn-primary"
											>
												View
											</button>
										</div>
									</div>
								</div>
								<div className="row advertisementWrapper">
									<div className="card col-md-12 no-padding">
										<div
											className="card-body"
											style={{
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'space-between'
											}}>
											<div style={{display: 'flex'}}>
												<img
													src={book} width='100' height='100'
													style={{marginTop: '-10px'}}
												/>
												<div>
													<h5 className="card-title">&#8377; 320</h5>
													<p className="card-text">
														10th Class
														<br />
														Science Book
														<br />
														<span className="badge badge-pill badge-primary">Available</span>
													</p>
												</div>
											</div>
											<button
												style={{alignSelf: 'center'}}
												className="btn btn-primary"
											>
												View
											</button>
										</div>
									</div>
								</div>

								{/* Pagination Section */}
								<div className="row">

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
