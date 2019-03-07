import React, { Component } from 'react';
import {connect} from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup';
import {fetchClasses,fetchSections} from "../../actions/login";
import md5 from 'md5';

class Register extends Component {
	componentDidMount() {
		this.props.fetchClasses();
		this.props.fetchSections();
	}

	render() {
		const { classes, sections } = this.props;

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
												<form className="user">
													<div className="form-group row">
														<div className="col-sm-6 mb-3 mb-sm-0 text-left">
															<label>Firstname:</label>
															<input type="text"
															       className="form-control"
															       id="firstname"
															       name="firstname"
															/>
														</div>
														<div className="col-sm-6 text-left">
															<label>Lastname:</label>
															<input type="text"
															       className="form-control"
															       id="lastname"
															       name="lastname"
															/>
														</div>
													</div>
													<div className="form-group row">
														<div className="col-sm-6 mb-3 mb-sm-0 text-left">
															<label>Class:</label>
															<select
																className="form-control"
																id="class"
																name="class"
															>
																{classes.map(classInfo => (
																	<option key={classInfo.id} value={classInfo.id}>
																		{classInfo.name}
																	</option>
																))}
															</select>
														</div>
														<div className="col-sm-6 text-left">
															<label>Section:</label>
															<select
																className="form-control"
																id="section"
																name="section"
															>
																{sections.map(section => (
																	<option key={section.id} value={section.id}>
																		{section.name}
																	</option>
																))}
															</select>
														</div>
													</div>
													<div className="form-group text-left">
														<label>Email:</label>
														<input type="email"
														       className="form-control"
														       id="email"
														       name="email"
														/>
													</div>
													<div className="form-group row">
														<div className="col-sm-6 mb-3 mb-sm-0 text-left">
															<label>Password:</label>
															<input type="password"
															       className="form-control"
															       id="password"
															       name="password"
															/>
														</div>
														<div className="col-sm-6 text-left">
															<label>Confirm Password:</label>
															<input type="password"
															       className="form-control"
															       id="confirmpassword"
															       name="confirmpassword"
															/>
														</div>
													</div>
													<a href="#" className="btn btn-primary btn-user btn-block">
														Register
													</a>
												</form>
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
	fetchSections
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
