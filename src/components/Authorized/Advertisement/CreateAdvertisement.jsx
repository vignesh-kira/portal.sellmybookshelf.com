import React, {Component} from 'react';
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {Formik} from "formik";
import {Link} from "react-router-dom";
import {API_SUCCESS} from "../../../constants/common";
import * as yup from "yup";
import {connect} from "react-redux";
import {fetchClasses, fetchSections } from "../../../actions/login";

class CreateAdvertisement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seller_final_price: ''
		};
	}

	componentDidMount() {
		this.props.fetchClasses();
		this.props.fetchSections();
	}

	componentDidUpdate() {
		const { registerUserStatus, cookies, user } = this.props;

		// if (registerUserStatus === API_SUCCESS){
		// 	const userCookie = {
		// 		id: user.id,
		// 		firstname: user.firstname
		// 	};
		// 	cookies.set('user', userCookie);
		// }
	}

	render() {
		const { classes, sections, cookies } = this.props;
//		const userCookie = cookies.get('user');

		const segmentSchema = yup.object().shape({
			title: yup.string().required('Adv. Title is required'),
			description: yup.string().required('Description is required'),
			studentClass: yup.string().required('Class is required'),
			section: yup.string().required('Section is required'),
			book_title: yup.string().required('Book Title is required'),
			book_author: yup.string().required('Book Author is required'),
			condition_text: yup.string().required('Condition Text is required'),
			condition_rating: yup.string().required('Condition Rating is required'),
			book_seller_price: yup.string().required('Book Seller Price is required'),
			book_final_price: yup.string()
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
							<PageTitle title="Create Advertisement"/>

							{/* Content Row */}
							<div className="row justify-content-center">
								<div className="col-lg-8 col-md-8">
									<Formik
										initialValues={{ title: '', description:'', book_title:'', book_author:'', studentClass:'', section:'', condition_text: '', condition_rating:'', book_seller_price: '', book_final_price: '' }}
										validationSchema={segmentSchema}
										onSubmit={this.handleFormSubmit}
									>
										{({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
											<form onSubmit={handleSubmit} >
												<div className="form-group row">
													<div className="col-sm-8 text-left">
														<label>Advertisement Title:</label>
														<input type="text"
														       className={`form-control ${errors.title && touched.title && 'is-invalid'}`}
														       id="title"
														       name="title"
														       onChange={handleChange}
														       onBlur={handleBlur}
														       value={values.title}
														/>
														{errors.title && touched.title && <div className="invalid-feedback">{errors.title}</div>}
													</div>
													<div className="col-sm-2 text-left">
														<label>Class:</label>
														<select
															className={`form-control ${errors.studentClass && touched.studentClass && 'is-invalid'}`}
															id="studentClass"
															name="studentClass"
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.studentClass}
														>
															<option value=""> - select - </option>
															{classes.map(classInfo => (
																<option key={classInfo.id} value={classInfo.id}>
																	{classInfo.name}
																</option>
															))}
														</select>
														{errors.studentClass && touched.studentClass && <div className="invalid-feedback">{errors.studentClass}</div>}
													</div>
													<div className="col-sm-2 text-left">
														<label>Section:</label>
														<select
															className={`form-control ${errors.section && touched.section && 'is-invalid'}`}
															id="section"
															name="section"
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.section}
														>
															<option value=""> - select -</option>
															{sections.map(section => (
																<option key={section.id} value={section.id}>
																	{section.name}
																</option>
															))}
														</select>
														{errors.section && touched.section && <div className="invalid-feedback">{errors.section}</div>}
													</div>
												</div>
												<div className="form-group row">
													<div className="col-sm-12 text-left">
														<label>Description:</label>
														<textarea className={`form-control ${errors.description && touched.description && 'is-invalid'}`}
														          id="description"
														          name="description"
														          onChange={handleChange}
														          onBlur={handleBlur}
														          value={values.description}
														>
														</textarea>
														{errors.description && touched.description && <div className="invalid-feedback">{errors.description}</div>}
													</div>
												</div>
												<div className="form-group row">
													<div className="col-sm-6 text-left">
														<label>Book Title:</label>
														<input type="text"
														       className={`form-control ${errors.book_title && touched.book_title && 'is-invalid'}`}
														       id="book_title"
														       name="book_title"
														       onChange={handleChange}
														       onBlur={handleBlur}
														       value={values.book_title}
														/>
														{errors.book_title && touched.book_title && <div className="invalid-feedback">{errors.book_title}</div>}
													</div>
													<div className="col-sm-6 text-left">
														<label>Book Author:</label>
														<input type="text"
														       className={`form-control ${errors.book_author && touched.book_author && 'is-invalid'}`}
														       id="book_author"
														       name="book_author"
														       onChange={handleChange}
														       onBlur={handleBlur}
														       value={values.book_author}
														/>
														{errors.book_author && touched.book_author && <div className="invalid-feedback">{errors.book_author}</div>}
													</div>
												</div>
												<div className="form-group row">
													<div className="col-sm-6 text-left">
														<label>Condition Text:</label>
														<input type="text"
														       className={`form-control ${errors.condition_text && touched.condition_text && 'is-invalid'}`}
														       id="condition_text"
														       name="condition_text"
														       onChange={handleChange}
														       onBlur={handleBlur}
														       value={values.condition_text}
														/>
														{errors.condition_text && touched.condition_text && <div className="invalid-feedback">{errors.condition_text}</div>}
													</div>
													<div className="col-sm-6 text-left">
														<label>Condition Rating (Out of 10):</label>
														<input type="text"
														       className={`form-control ${errors.condition_rating && touched.condition_rating && 'is-invalid'}`}
														       id="condition_rating"
														       name="condition_rating"
														       onChange={handleChange}
														       onBlur={handleBlur}
														       value={values.condition_rating}
														/>
														{errors.condition_rating && touched.condition_rating && <div className="invalid-feedback">{errors.condition_rating}</div>}
													</div>
												</div>
												<div className="form-group row">
													<div className="col-sm-6 text-left">
														<label>Book Price:</label>
														<input type="text"
														       className={`form-control ${errors.book_seller_price && touched.book_seller_price && 'is-invalid'}`}
														       id="book_seller_price"
														       name="book_seller_price"
														       onBlur={handleBlur}
														       value={values.book_seller_price}
														       onChange={(e) => {
															       values.book_final_price = (e.target.value * 1.10).toFixed(2);
															       handleChange(e);
														       }}
														/>
														{errors.book_seller_price && touched.book_seller_price && <div className="invalid-feedback">{errors.book_seller_price}</div>}
													</div>
													<div className="col-sm-6 text-left">
														<label>Book Final Price:</label>
														<input type="text"
														       className="form-control"
														       id="book_final_price"
														       name="book_final_price"
														       disabled
														       value={values.book_final_price}
														/>
													</div>
												</div>
												<div className="form-group row">
													<div className="col text-center">
														<button
															type="submit"
															className="btn btn-primary btn-lg"
															onClick={handleSubmit}
														>
															Create Advertisement
														</button>
													</div>
												</div>
											</form>
										)}
									</Formik>
									<hr />
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
	classes: state.login.classes,
	sections: state.login.sections,
	user: state.login.user,
	cookies: ownProps.cookies
});

const mapDispatchToProps = {
	fetchClasses,
	fetchSections
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdvertisement);
