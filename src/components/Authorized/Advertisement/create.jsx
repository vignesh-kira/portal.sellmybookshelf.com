import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink, faTachometerAlt, faBell, faUserCircle, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const MainDashboard = (props) => (
	<div id="wrapper">
		{/* Sidebar */}
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* Sidebar - Brand */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
				<div className="sidebar-brand-icon rotate-n-15">
					<FontAwesomeIcon icon={faLaughWink} size="2x"/>
				</div>
				<div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
			</a>

			{/* Divider */}
			<hr className="sidebar-divider my-0" />

			{/* Nav Item - Dashboard */}
			<li className="nav-item active">
				<a className="nav-link" href="index.html">
					<i>
						<FontAwesomeIcon icon={faTachometerAlt} />
					</i>
					<span>Dashboard</span></a>
			</li>

			{/* Divider */}
			<hr className="sidebar-divider" />

			{/* Heading */}
			<div className="sidebar-heading">
				Interface
			</div>

			{/* Nav Item - Pages Collapse Menu */}
			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className="fa fa-cog"></i>
					<span>Components</span>
				</a>
				{/*<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"*/}
				{/*data-parent="#accordionSidebar">*/}
				{/*<div className="bg-white py-2 collapse-inner rounded">*/}
				{/*<h6 className="collapse-header">Custom Components:</h6>*/}
				{/*<a className="collapse-item" href="buttons.html">Buttons</a>*/}
				{/*<a className="collapse-item" href="cards.html">Cards</a>*/}
				{/*</div>*/}
				{/*</div>*/}
			</li>

			{/* Nav Item - Utilities Collapse Menu */}
			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className="fa fa-fw fa-wrench"></i>
					<span>Utilities</span>
				</a>
			</li>

			{/* Divider */}
			<hr className="sidebar-divider" />

			{/* Heading */}
			<div className="sidebar-heading">
				Addons
			</div>

			{/* Nav Item - Pages Collapse Menu */}
			<li className="nav-item">
				<a className="nav-link" href="#" >
					<i className="fa fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

			{/* Nav Item - Tables */}
			<li className="nav-item">
				<a className="nav-link" href="tables.html">
					<i className="fa fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			{/* Divider */}
			<hr className="sidebar-divider d-none d-md-block" />

			{/* Sidebar Toggler (Sidebar) */}
			{/*<div className="text-center d-none d-md-inline">*/}
			{/*<button className="border-0" id="sidebarToggle">*/}
			{/*<i>*/}
			{/*<FontAwesomeIcon icon={faAngleLeft} />*/}
			{/*</i>*/}
			{/*</button>*/}
			{/*</div>*/}

		</ul>
		{/* End of Sidebar */}

		{/* Content Wrapper */}
		<div id="content-wrapper" className="d-flex flex-column">

			{/* Main Content */}
			<div id="content">

				{/* Topbar */}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/* Sidebar Toggle (Topbar) */}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/* Topbar Navbar */}
					<ul className="navbar-nav ml-auto">

						{/* Nav Item - Search Dropdown (Visible Only XS) */}
						<li className="nav-item dropdown no-arrow d-sm-none">
							<a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
							   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i className="fa fa-search fa-fw"></i>
							</a>
							{/* Dropdown - Messages */}
							<div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
							     aria-labelledby="searchDropdown">
								<form className="form-inline mr-auto w-100 navbar-search">
									<div className="input-group">
										<input type="text" className="form-control bg-light border-0 small"
										       placeholder="Search for..." aria-label="Search"
										       aria-describedby="basic-addon2"
										/>
										<div className="input-group-append">
											<button className="btn btn-primary" type="button">
												<i className="fas fa-search fa-sm"></i>
											</button>
										</div>
									</div>
								</form>
							</div>
						</li>

						{/* Nav Item - Alerts */}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
							   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i>
									<FontAwesomeIcon icon={faBell} />
								</i>								{/* Counter - Alerts */}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
							{/* Dropdown - Alerts */}
							<div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
							     aria-labelledby="alertsDropdown">
								<h6 className="dropdown-header">
									Alerts Center
								</h6>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="mr-3">
										<div className="icon-circle bg-primary">
											<i className="fas fa-file-alt text-white"></i>
										</div>
									</div>
									<div>
										<div className="small text-gray-500">December 12, 2019</div>
										<span className="font-weight-bold">A new monthly report is ready to download!</span>
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="mr-3">
										<div className="icon-circle bg-success">
											<i className="fas fa-donate text-white"></i>
										</div>
									</div>
									<div>
										<div className="small text-gray-500">December 7, 2019</div>
										$290.29 has been deposited into your account!
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="mr-3">
										<div className="icon-circle bg-warning">
											<i className="fas fa-exclamation-triangle text-white"></i>
										</div>
									</div>
									<div>
										<div className="small text-gray-500">December 2, 2019</div>
										Spending Alert: We've noticed unusually high spending for your account.
									</div>
								</a>
								<a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
							</div>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/* Nav Item - User Information */}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
							   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
								<i>
									<FontAwesomeIcon icon={faUserCircle} size='lg'/>
								</i>
							</a>
							{/* Dropdown - User Information */}
							<div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
							     aria-labelledby="userDropdown">
								<a className="dropdown-item" href="#">
									<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
									Profile
								</a>
								<a className="dropdown-item" href="#">
									<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
									Settings
								</a>
								<a className="dropdown-item" href="#">
									<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
									Activity Log
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
									<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
									Logout
								</a>
							</div>
						</li>

					</ul>

				</nav>
				{/* End of Topbar */}

				{/* Begin Page Content */}
				<div className="container-fluid">

					{/* Page Heading */}
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
					</div>

					{/* Content Row */}
					<div className="row">

						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div
												className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings
												(Monthly)
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-calendar fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div
												className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings
												(Annual)
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-comments fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-info shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div
												className="text-xs font-weight-bold text-info text-uppercase mb-1">Earnings
												(Monthly)
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-comments fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Earnings (Monthly) Card Example */}
						<div className="col-xl-3 col-md-6 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div
												className="text-xs font-weight-bold text-warning text-uppercase mb-1">Earnings
												(Annual)
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
										</div>
										<div className="col-auto">
											<i className="fa fa-comments fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Content Row */}
					<div className="row">

						{/* Content Column */}
						<div className="col-lg-6 mb-4">

							{/* Color System */}
							<div className="row">
								<div className="col-lg-6 mb-4">
									<div className="card bg-danger text-white shadow">
										<div className="card-body">
											Danger
											<div className="text-white-50 small">#e74a3b</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb-4">
									<div className="card bg-success text-white shadow">
										<div className="card-body">
											Success
											<div className="text-white-50 small">#1cc88a</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<div className="col-lg-6 mb-4">

							{/* Approach */}
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">
										<i style={{marginRight:'5px'}}>
											<FontAwesomeIcon icon={faBell} />
										</i>
										<span>Notification</span>
									</h6>
								</div>
								<ul className="text-left" style={{paddingLeft: '10px;'}}>
									<li>Your book has been reserved by 8th Class student</li>
									<li>Your book has was bought by 8th Class student</li>
								</ul>
							</div>

						</div>
					</div>


				</div>
				{/* /.container-fluid */}

			</div>
			{/* End of Main Content */}

			{/* Footer */}
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; SellMyBookShelf.com 2019</span>
					</div>
				</div>
			</footer>
			{/* End of Footer */}

		</div>
		{/* End of Content Wrapper */}


	</div>
);


export default MainDashboard;

