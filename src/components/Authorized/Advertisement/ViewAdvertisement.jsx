import React, {Component} from 'react';
import {connect} from "react-redux";
import StarRatings from 'react-star-ratings';
import Moment from 'react-moment';

import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {withCookies} from "react-cookie";

import {advertisementView} from "../../../actions/portal";
import "../../../assets/styles/common.css";
import book from "../../../images/book.png";


class ViewAdvertisement extends Component {
	componentDidMount() {
		const { match: { params : {id} } } = this.props;

		this.props.advertisementView({id});
	}
	render() {
		const { advertisement } = this.props;
		const { advertisementStatus, subject, book_author, book_final_price, book_title, condition_rating, condition_text, description, createdAt } = advertisement;

		return (
			Object.keys(advertisement).length > 0 &&
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
										Title: {book_title}
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
													<th>&#8377; {book_final_price}</th>
												</tr>
												<tr>
													<th>Class:</th>
													<th>{advertisement.class.name}</th>
												</tr>
												<tr>
													<th>Subject:</th>
													<th>{subject.name}</th>
												</tr>
												<tr>
													<th>Author:</th>
													<th>{book_author}</th>
												</tr>
												<tr>
													<th>Status:</th>
													<th>
														<span className="badge badge-pill badge-primary">{advertisementStatus.name}</span>
													</th>
												</tr>
												</tbody>
											</table>
										</p>
									</div>
									<div className="col-md-6 col-sm-6 centerAlign">
										<button
											className="btn btn-primary btn-xlarge"
										>
											Reserve
										</button>
									</div>
								</div>
								<hr />
								<div className="row col-md-12  col-sm-12">
									<div className="col-md-7 col-sm-7">
										<h5><b>Description:</b></h5>
										<p className="text-justify">
											{description}
										</p>
									</div>
									<div className="col-md-5 col-sm-5 advertisementExtraInfo">
										<table>
											<tbody>
											<tr>
												<th>Date:</th>
												<th>
													<Moment
														format="LLLL"
														>
														{createdAt}
													</Moment>
												</th>
											</tr>
											<tr>
												<th>Condition Rating:</th>
												<th>
													<StarRatings
														rating={parseInt(condition_rating)}
														starRatedColor="#007bff"
														starDimension="20px"
														starSpacing="2px"
													/>
												</th>
											</tr>
											<tr>
												<th>Condition Text:</th>
												<th>{condition_text}</th>
											</tr>
											</tbody>
										</table>
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
