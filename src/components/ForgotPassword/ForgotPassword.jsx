import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ForgotPassword extends Component {
	render() {
		return (
			<div className="bg-gradient-primary container-with-no-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-11 col-lg-12 col-md-11">
							<div className="card o-hidden border-0 shadow-lg my-5">
								<div className="card-body p-0">
									<div className="row">
										<div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
										<div className="col-lg-6">
											<div className="p-5">
												<div className="text-center">
													<h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
													<p className="mb-4 text-justify">
														We get it, stuff happens.
														Please do either of the following to reset your password:
													</p>
													<p>
														<ol className="text-left">
															<li>
																Call or leave a  message to <a href="tel:+918880926101"><b>(+91)8880926101</b></a> and we will contact you soon.
															</li>
															<b>Or</b>
															<li>
																Just email to <a href="mailto:admin@sellmybookshelf.com"><b>admin@sellmybookshelf.com</b></a> and we'll send
																you instruction on how to reset password!
															</li>
														</ol>
													</p>
												</div>
												{/*<form className="user">*/}
												{/*<div className="form-group">*/}
												{/*<input type="email" className="form-control form-control-user"*/}
												{/*id="exampleInputEmail" aria-describedby="emailHelp"*/}
												{/*placeholder="Enter Email Address..." />*/}
												{/*</div>*/}
												{/*<a href="#" className="btn btn-primary btn-user btn-block">*/}
												{/*Reset Password*/}
												{/*</a>*/}
												{/*</form>*/}
												<hr />
												<div className="text-center">
													<Link className="small" to="/register">Create an Account!</Link>
												</div>
												<div className="text-center">
													<Link className="small" to="/login">Already have an account?
														Login!</Link>
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

export default ForgotPassword;
