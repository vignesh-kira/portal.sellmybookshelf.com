import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {withCookies} from "react-cookie";
import {Formik} from "formik";
import * as yup from "yup";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import {connect} from "react-redux";
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {fetchClasses, fetchSubjects, advertisementsListFetch} from "../../../actions/portal";
import book from "../../../images/book.png";
import "../../../assets/styles/pagination-overwrite.css";


class ListAdvertisement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			studentClass: '',
			subject_id: '',
			page: 0,
			pageSize: 10,
			limit: 10
		}
	}

	componentDidMount() {
		const { page } = this.state;
		this.props.fetchClasses();
		this.props.fetchSubjects();
		this.props.advertisementsListFetch({studentClass: '', subject_id: '', page});
	}

	componentDidUpdate(prevProps, prevState) {
		const { page, studentClass, subject_id } = this.state;

		if(prevState.page !== page || prevState.studentClass !== studentClass || prevState.subject_id !== subject_id){
			this.props.advertisementsListFetch({studentClass, subject_id, page});
		}
	}

	advertisementItemUI = (advertisement) => {

		return (
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
								<h5 className="card-title">&#8377; {advertisement.book_final_price}</h5>
								<p className="card-text">
									{advertisement.class.name} Class
									<br />
									{advertisement.subject.name} Book
									<br />
									<span className="badge badge-pill badge-primary">{advertisement.advertisementStatus.name}</span>
								</p>
							</div>
						</div>
						<Link to={`/advertisement/view/${advertisement.id}`}
						      style={{alignSelf: 'center'}}
						      className="btn btn-primary btn-lg"
						>
							View
						</Link>
					</div>
				</div>
			</div>
		)
	};

	populateAdvertisementItems = () =>{
		const {advertisementsList: {rows = []}} = this.props;
		return rows.map( advertisement =>{
			return this.advertisementItemUI(advertisement);
		});
	};

	onChangePage = (page) => {
		page--;
		this.setState({
			page
		});
	};

	handleFormSubmit = ({ studentClass, subject_id}) => {
		this.setState({
			studentClass,
			subject_id
		});
	};

	render() {
		const { advertisementsList: { count }, classes, subjects } = this.props;
		const { studentClass, subject_id, page, pageSize, limit } = this.state;
		const startLimit = page*pageSize + 1;
		const endLimit = (page*pageSize + limit) > count ? count : (page*pageSize + limit);

		const segmentSchema = yup.object().shape({
			studentClass: yup.string(),
			subject_id: yup.string(),
		});

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

								<div className="row">
									<Formik
										initialValues={{
											studentClass,
											subject_id
										}}
										validationSchema={segmentSchema}
										onSubmit={this.handleFormSubmit}
									>
										{({errors, handleBlur, handleChange, handleSubmit, touched, values}) => (
											<form onSubmit={handleSubmit} className="col-md-12 col-sm-12">
												<div className="row col-md-12" >
													<label><b>Filter:</b></label>
												</div>
												<div className="form-group row">
													<div className="col-sm-4 col-md-4 text-left">
														<label>Class:</label>
														<select
															className={`form-control ${errors.studentClass && touched.studentClass && 'is-invalid'}`}
															id="studentClass"
															name="studentClass"
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.studentClass}
														>
															<option value="">All</option>
															{classes.map(classInfo => (
																<option key={classInfo.id} value={classInfo.id}>
																	{classInfo.name}
																</option>
															))}
														</select>
														{errors.studentClass && touched.studentClass && <div
															className="invalid-feedback">{errors.studentClass}</div>}
													</div>
													<div className="col-sm-4 col-md-4 text-left">
														<label>Subject:</label>
														<select
															className={`form-control ${errors.subject_id && touched.subject_id && 'is-invalid'}`}
															id="subject_id"
															name="subject_id"
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.subject_id}
														>
															<option value="">All</option>
															{subjects.map(subject => (
																<option key={subject.id} value={subject.id}>
																	{subject.name}
																</option>
															))}
														</select>
														{errors.subject_id && touched.subject_id && <div
															className="invalid-feedback">{errors.subject_id}</div>}
													</div>
													<div className="col-sm-4 col-md-4" style={{display: 'flex'}}>
														<button
															type="submit"
															className="btn btn-primary btn-md"
															style={{alignSelf: 'flex-end'}}
															onClick={handleSubmit}
														>
															Apply
														</button>
													</div>
												</div>
											</form>
										)}
									</Formik>
								</div>
								<hr />
								{/* Books Count Section */}
								<div className="row">
									<h6 className="text-left">
										{
											count > 0
												? (`${startLimit} - ${endLimit} of ${count} `)
												: `0 `
										}
										books are listed.
									</h6>
								</div>

								{/* Books Advertisement Section */}
								{this.populateAdvertisementItems()}

								{/* Pagination Section */}
								{
									count > 0 && (
										<div className="row col-md-12 text-center">
											<Pagination
												className="paginationComponent"
												onChange={(page)=> this.onChangePage(page)}
												current={page + 1}
												pageSize={pageSize}
												total={count}
											/>
										</div>
									)
								}

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
	classes: state.common.classes,
	subjects: state.common.subjects,
	user: state.common.user,
	cookies: ownProps.cookies,
	advertisementsList: state.advertisement.advertisementsList,
	advertisementsListFetchStatus: state.advertisement.advertisementsListFetchStatus
});

const mapDispatchToProps = {
	advertisementsListFetch,
	fetchClasses,
	fetchSubjects,
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ListAdvertisement));
