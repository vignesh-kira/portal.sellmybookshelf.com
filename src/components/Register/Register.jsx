import React, { Component } from 'react';
import {connect} from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup';
import {
	fetchClasses,
	fetchSections,
	registerUser
} from "../../actions/login";
import md5 from 'md5';

class Register extends Component {
	componentDidMount() {
		this.props.fetchClasses();
		this.props.fetchSections();
	}

	handleFormSubmit = (entity) => {
		delete entity.confirmpassword;
		let registrationFields = Object.assign({}, entity);
		registrationFields.password = md5(entity.password);
		this.props.registerUser(entity);
	};

	render() {
		const { classes, sections } = this.props;
		const segmentSchema = yup.object().shape({
			firstname: yup.string().required('First name is required'),
			lastname: yup.string().required('Last name is required'),
			studentClass: yup.string().required('Class is required'),
			section: yup.string().required('Section is required'),
			email: yup.string().email('Invalid email address'),
			phone: yup.number().required('Phone is required'),
			password: yup.string().required('Password is required'),
			confirmpassword: yup.string().required('Confirm Password is required').test('passwords-match', 'Passwords do not match', function(value) {
				return this.parent.password === value;
			}),
		});

		return (
			<div className="bg-gradient-primary container-with-no-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-10 col-lg-12 col-md-9">
							<div className="card o-hidden border-0 shadow-lg my-5">
								<div className="card-body p-0">
									<div className="row">
										<div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
										<div className="col-lg-7">
											<div className="p-5">
												<div className="text-center">
													<h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
												</div>
												<Formik
													initialValues={{ firstname: '', lastname:'', studentClass:'', section:'', email: '', phone:'', password: '', confirmpassword: '' }}
													validationSchema={segmentSchema}
													onSubmit={this.handleFormSubmit}
												>
													{({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
														<form className="user" onSubmit={handleSubmit} >
															<div className="form-group row">
																<div className="col-sm-6 mb-3 mb-sm-0 text-left">
																	<label>Firstname:</label>
																	<input type="text"
																	       className={`form-control ${errors.firstname && touched.firstname && 'is-invalid'}`}
																	       id="firstname"
																	       name="firstname"
																	       onChange={handleChange}
																	       onBlur={handleBlur}
																	       value={values.firstname}
																	/>
																	{errors.firstname && touched.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
																</div>
																<div className="col-sm-6 text-left">
																	<label>Lastname:</label>
																	<input type="text"
																	       className={`form-control ${errors.lastname && touched.lastname && 'is-invalid'}`}
																	       id="lastname"
																	       name="lastname"
																	       onChange={handleChange}
																	       onBlur={handleBlur}
																	       value={values.lastname}
																	/>
																	{errors.lastname && touched.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
																</div>
															</div>
															<div className="form-group row">
																<div className="col-sm-6 mb-3 mb-sm-0 text-left">
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
																<div className="col-sm-6 text-left">
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
																<div className="col-sm-6 mb-3 mb-sm-0 text-left">
																	<label>Email:</label>
																	<input type="email"
																	       className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
																	       id="email"
																	       name="email"
																	       onChange={handleChange}
																	       onBlur={handleBlur}
																	       value={values.email}
																	/>
																	{errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
																</div>
																<div className="col-sm-6 text-left">
																	<label>Phone:</label>
																	<input type="phone"
																	       className={`form-control ${errors.phone && touched.phone && 'is-invalid'}`}
																	       id="phone"
																	       name="phone"
																	       onChange={handleChange}
																	       onBlur={handleBlur}
																	       value={values.phone}
																	/>
																	{errors.phone && touched.phone && <div className="invalid-feedback">{errors.phone}</div>}
																</div>
															</div>
															<div className="form-group row">
																<div className="col-sm-6 mb-3 mb-sm-0 text-left">
																	<label>Password:</label>
																	<input type="password"
																	       className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
																	       id="password"
																	       name="password"
																	       onChange={handleChange}
																	       onBlur={handleBlur}
																	       value={values.password}
																	/>
																	{errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
																</div>
																<div className="col-sm-6 text-left">
																	<label>Confirm Password:</label>
																	<input type="password"
																	       className={`form-control ${errors.confirmpassword && touched.confirmpassword && 'is-invalid'}`}
																	       id="confirmpassword"
																	       name="confirmpassword"
																	       onChange={handleChange}
																	       onBlur={handleBlur}
																	       value={values.confirmpassword}
																	/>
																	{errors.confirmpassword && touched.confirmpassword && <div className="invalid-feedback">{errors.confirmpassword}</div>}
																</div>
															</div>
															<button
																type="submit"
																className="btn btn-primary btn-user btn-block"
																onClick={handleSubmit}
															>
																Register
															</button>
														</form>
													)}
												</Formik>
												<hr />
												<div className="text-center">
													<a className="small" href="/forgotpassword">Forgot Password?</a>
												</div>
												<div className="text-center">
													<a className="small" href="/login">Already have an account? Login!</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	classes: state.login.classes,
	sections: state.login.sections
});

const mapDispatchToProps = {
	fetchClasses,
	fetchSections,
	registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
