import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import StarRatings from 'react-star-ratings';
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {withCookies} from "react-cookie";

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

							<div className="col-md-12 text-left"
							     style={{
								     border: '1px solid rgba(0, 0, 0, 0.125)',
								     borderRadius: '5px',
								     backgroundColor: 'white',
								     padding: '30px'
							     }}>
								<div className="row">
									<h2>
										Title: Maths Book is ready to be sold
									</h2>
								</div>
								<hr />
								{/* Books Count Section */}
								<div className="row col-md-12  col-sm-12">
									<div className="col-md-2 col-sm-2 vr">
										<img

											src={book} width='150' height='150'
											style={{marginTop: '-10px', marginRight: '20px'}}
										/>
									</div>
									<div className="col-md-4 col-sm-4">
										<p className="card-text advertisementBasicInfo">
											<table>
												<tbody>
												<tr>
													<th>Price:</th>
													<th>&#8377; 300</th>
												</tr>
												<tr>
													<th>Class:</th>
													<th>10th</th>
												</tr>
												<tr>
													<th>Subject:</th>
													<th>Maths</th>
												</tr>
												<tr>
													<th>Author:</th>
													<th>RK Kesri</th>
												</tr>
												<tr>
													<th>Status:</th>
													<th>
														<span className="badge badge-pill badge-primary">Available</span>
													</th>
												</tr>
												</tbody>
											</table>
										</p>
									</div>
									<div className="col-md-6 col-sm-6 centerAlign">
										<button
											className="btn btn-primary btn-lg"
										>

											Reserve
										</button>
									</div>
								</div>
								<hr />
								<div className="row col-md-12  col-sm-12">
									<div className="col-md-8 col-sm-8">
										<h5><b>Description:</b></h5>
										<p className="text-justify">
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
											SOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiongSOmething soemthing something somethiong
										</p>
									</div>
									<div className="col-md-4 col-sm-4 advertisementExtraInfo">
										<table>
											<tbody>
											<tr>
												<th>Date:</th>
												<th>10th July 2018</th>
											</tr>
											<tr>
												<th>Condition Rating:</th>
												<th>
													<StarRatings
														rating={3}
														starRatedColor="#007bff"
														starDimension="20px"
														starSpacing="2px"
													/>
												</th>
											</tr>
											<tr>
												<th>Condition Text:</th>
												<th>Good, Not Bad, Torn</th>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="row centerAlign">
									<button
										className="btn btn-primary btn-xlarge"
									>

										Reserve
									</button>
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
	cookies: ownProps.cookies,
	advertisement: state.advertisement.advertisement,
	advertisementViewStatus: state.advertisement.advertisementViewStatus
});

const mapDispatchToProps = {
	advertisementView
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ViewAdvertisement));
