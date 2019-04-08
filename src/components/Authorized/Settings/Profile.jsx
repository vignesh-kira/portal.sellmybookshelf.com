import React, {Component} from 'react';
import {Formik} from "formik";
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import * as yup from "yup";
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {
	profileFetch,
	fetchClasses,
	fetchSections,
	profileUpdate
} from "../../../actions/portal";
import {API_ERROR, API_SUCCESS} from "../../../constants/common";
import ProfileUpdateModal from "../common/ProfileUpdateModal";

class Profile extends Component {

	componentDidMount() {
		const { cookies } = this.props;
		const {id} = cookies.get('user');

		this.props.profileFetch({id});
		this.props.fetchClasses();
		this.props.fetchSections();
	}

	handleFormSubmit = (entity) => {
		const {profileUpdate, cookies } = this.props;
		const {id} = cookies.get('user');

		profileUpdate({entity, id});
	};

	render() {
		const { profile, profileFetchStatus, classes, sections } = this.props;
		const {
			firstname,
			lastname,
			bazaar_name,
			about,
			bazaar_books_sold,
			bazaar_rating,
			email,
			phone,
			class_id,
			section_id
		} = profile;
		const segmentSchema = yup.object().shape({
			firstname: yup.string().required('First name is required'),
			lastname: yup.string().required('Last name is required'),
			studentClass: yup.number().required('Class is required'),
			section_id: yup.string().required('Section is required'),
			bazaar_name: yup.string(),
			about: yup.string(),
			bazaar_books_sold: yup.number(),
			bazaar_rating: yup.number(),
			email: yup.string(),
			phone: yup.number(),
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
							<PageTitle title="Profile"/>

							{
								profileFetchStatus === API_SUCCESS && (
									/* Content Row */
									<div className="row justify-content-center">
										<div className="col-lg-10 col-md-10">
											<Formik
												initialValues={{
													firstname,
													lastname,
													bazaar_name,
													about,
													bazaar_books_sold,
													bazaar_rating,
													email,
													phone,
													studentClass: class_id,
													section_id
												}}
												validationSchema={segmentSchema}
												onSubmit={this.handleFormSubmit}
											>
												{({errors, handleBlur, handleChange, handleSubmit, touched, values}) => (
													<form onSubmit={handleSubmit}>
														<div className="form-group row">
															<div className="col-sm-4 text-left">
																<label>First Name: </label>
																<input type="text"
																       className={`form-control ${errors.firstname && touched.firstname && 'is-invalid'}`}
																       id="firstname"
																       name="firstname"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.firstname}
																/>
																{errors.firstname && touched.firstname &&
																<div className="invalid-feedback">{errors.lastname}</div>}
															</div>
															<div className="col-sm-4 text-left">
																<label>Last Name:</label>
																<input type="text"
																       className={`form-control ${errors.lastname && touched.lastname && 'is-invalid'}`}
																       id="lastname"
																       name="lastname"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.lastname}
																/>
																{errors.lastname && touched.lastname &&
																<div className="invalid-feedback">{errors.lastname}</div>}
															</div>
															<div className="col-sm-4 text-left">
																<label>Bazaar name:</label>
																<input type="text"
																       className={`form-control ${errors.bazaar_name && touched.bazaar_name && 'is-invalid'}`}
																       id="bazaar_name"
																       name="bazaar_name"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.bazaar_name}
																/>
																{errors.bazaar_name && touched.bazaar_name && <div
																	className="invalid-feedback">{errors.bazaar_name}</div>}
															</div>
														</div>
														<div className="form-group row">
															<div className="col-sm-12 text-left">
																<label>About:</label>
																<textarea
																	className={`form-control ${errors.about && touched.about && 'is-invalid'}`}
																	id="about"
																	name="about"
																	onChange={handleChange}
																	onBlur={handleBlur}
																	value={values.about}
																>
																</textarea>
																{errors.about && touched.about && <div
																	className="invalid-feedback">{errors.about}</div>}
															</div>

														</div>
														<div className="form-group row">
															<div className="col-sm-6 text-left">
																<label>Class:</label>
																<select
																	className={`form-control ${errors.studentClass && touched.studentClass && 'is-invalid'}`}
																	id="studentClass"
																	name="studentClass"
																	onChange={handleChange}
																	onBlur={handleBlur}
																	value={values.studentClass}
																>
																	<option value=""> - select -</option>
																	{classes.map(classInfo => (
																		<option key={classInfo.id} value={classInfo.id}>
																			{classInfo.name}
																		</option>
																	))}
																</select>
																{errors.studentClass && touched.studentClass && <div
																	className="invalid-feedback">{errors.studentClass}</div>}
															</div>
															<div className="col-sm-6 text-left">
																<label>Section:</label>
																<select
																	className={`form-control ${errors.section_id && touched.section_id && 'is-invalid'}`}
																	id="section_id"
																	name="section_id"
																	onChange={handleChange}
																	onBlur={handleBlur}
																	value={values.section_id}
																>
																	<option value=""> - select -</option>
																	{sections.map(section => (
																		<option key={section.id} value={section.id}>
																			{section.name}
																		</option>
																	))}
																</select>
																{errors.section_id && touched.section_id && <div
																	className="invalid-feedback">{errors.section_id}</div>}
															</div>
														</div>
														<div className="form-group row">
															<div className="col-sm-6 text-left">
																<label>Email:</label>
																<input type="text"
																       className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
																       id="email"
																       name="email"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.email}
																/>
																{errors.email && touched.email && <div
																	className="invalid-feedback">{errors.email}</div>}
															</div>
															<div className="col-sm-6 text-left">
																<label>Phone:</label>
																<input type="text"
																       className={`form-control ${errors.phone && touched.phone && 'is-invalid'}`}
																       id="phone"
																       name="phone"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.phone}
																       disabled
																/>
																{errors.phone && touched.phone && <div
																	className="invalid-feedback">{errors.phone}</div>}
															</div>
														</div>


														<div className="form-group row">
															<div className="col text-center">
																<button
																	type="submit"
																	className="btn btn-primary btn-lg"
																	onClick={handleSubmit}
																>
																	Update Profile
																</button>
															</div>
														</div>
													</form>
												)}
											</Formik>
											<hr/>
										</div>
									</div>
								)
							}
							{
								profileFetchStatus === API_ERROR && (
									<div className="row justify-content-center">
										<div className="alert alert-danger" role="alert">
											The User does not exist or you do not have permission to view the User data!
										</div>
									</div>
								)
							}
						</div>
						{/* /.container-fluid */}

					</div>
					{/* End of Main Content */}

					{/* Footer */}
					<Footer />
					{/* End of Footer */}

				</div>
				{/* End of Content Wrapper */}
				<ProfileUpdateModal />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	classes: state.common.classes,
	sections: state.common.sections,
	cookies: ownProps.cookies,
	profile: state.profile.profile,
	profileFetchStatus: state.profile.profileFetchStatus,
});

const mapDispatchToProps = {
	profileFetch,
	fetchClasses,
	fetchSections,
	profileUpdate
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Profile));

