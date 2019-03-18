import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import md5 from 'md5';
import {Link , Redirect} from "react-router-dom";
import "../../assets/styles/common.css";
import { fetchUser } from '../../actions/login';


class Login extends Component {
	handleFormSubmit = (entity) => {
		entity = Object.assign(entity, {
			password: md5(entity.password)
		});
		this.props.fetchUser(entity);
	};
	render() {
		const { login, cookies } = this.props;
		const { userFetchStatus, user } = login;
		const userCookie = cookies.get('user');

		// Always delete null cookies
		if(userCookie && userCookie === "null"){
			cookies.remove('user');
		}

		if(userFetchStatus){
			const userCookie = {
				id: user.id,
				firstname: user.firstname
			};
			cookies.set('user', userCookie);
			return (<Redirect to={{pathname: "/dashboard"}}/>)
		}
		const segmentSchema = yup.object().shape({
			email: yup.string().email('Invalid email address').required('Email is required'),
			password: yup.string().required('Password is required')
		});
		return (
			<div className="bg-gradient-primary container-with-no-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-10 col-lg-12 col-md-9">
							<div className="card o-hidden border-0 shadow-lg my-5">
								<div className="card-body p-0">
									<div className="row">
										<div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
										<div className="col-lg-6">
											<div className="p-5">
												<div className="text-center">
													<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
												</div>
												<Formik
													initialValues={{ email: '', password: '' }}
													validationSchema={segmentSchema}
													onSubmit={this.handleFormSubmit}
												>
													{({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
														<form className="user" onSubmit={handleSubmit} >
															<div className="form-group text-left">
																<label>Email:</label>
																<input type="email"
																       className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
																       name="email"
																       id="email"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.email}
																/>
																{errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
															</div>
															<div className="form-group text-left">
																<label>Password:</label>
																<input type="password"
																       className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
																       id="password"
																       onChange={handleChange}
																       onBlur={handleBlur}
																       value={values.password}
																/>
																{errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
															</div>
															<div className="form-group">
																<div className="custom-control custom-checkbox small">
																	<input type="checkbox"
																	       className="custom-control-input"
																	       id="customCheck"
																	/>
																	<label className="custom-control-label"
																	       htmlFor="customCheck">Remember Me</label>
																</div>
															</div>
															<button
																type="submit"
																className="btn btn-primary btn-user btn-block"
																onClick={handleSubmit}
															>
																Login
															</button>
														</form>
													)}
												</Formik>
												<hr />
												<div className="text-center">
													<Link className="small" to="/forgotpassword">
														Forgot Password?</Link>
												</div>
												<div className="text-center">
													<Link className="small" to="/register">Register</Link>
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

const mapStateToProps = (state, ownProps) => ({
	login: state.login,
	cookies: ownProps.cookies
});

const mapDispatchToProps = {
	fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
