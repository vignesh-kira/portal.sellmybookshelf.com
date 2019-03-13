import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink, faTachometerAlt, faSignOutAlt, faTools, faListOl, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => (
	<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

		{/* Sidebar - Brand */}
		<a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
			<div className="sidebar-brand-icon rotate-n-15">
				<FontAwesomeIcon icon={faLaughWink} size="2x"/>
			</div>
			<div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
		</a>

		{/* Divider */}
		<hr className="sidebar-divider my-0" />

		{/* Nav Item - Dashboard */}
		<li className="nav-item active">
			<a className="nav-link" href="/dashboard">
				<i>
					<FontAwesomeIcon icon={faTachometerAlt} />
				</i>
				<span>Dashboard</span></a>
		</li>

		{/* Divider */}
		<hr className="sidebar-divider" />

		{/* Heading */}
		<div className="sidebar-heading">
			Advertisement
		</div>

		<li className="nav-item">
			<a className="nav-link" href="/advertisement/list">
				<i>
					<FontAwesomeIcon icon={faListOl} />
				</i>
				<span>List</span>
			</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="/advertisement/create">
				<i>
					<FontAwesomeIcon icon={faPlusCircle} />
				</i>
				<span>Create</span>
			</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="/advertisement/edit">
				<i>
					<FontAwesomeIcon icon={faEdit} />
				</i>
				<span>Edit</span>
			</a>
		</li>

		{/* Divider */}
		<hr className="sidebar-divider" />

		{/* Heading */}
		<div className="sidebar-heading">
			Settings
		</div>

		{/* Nav Item - Pages Collapse Menu */}
		<li className="nav-item">
			<a className="nav-link" href="/settings/profile" >
				<i>
					<FontAwesomeIcon icon={faTools} />
				</i>
				<span>Profile</span>
			</a>
		</li>

		{/* Nav Item - Tables */}
		<li className="nav-item">
			<a className="nav-link" href="#">
				<i>
					<FontAwesomeIcon icon={faSignOutAlt} />
				</i>
				<span>Logout</span></a>
		</li>

		{/* Divider */}
		<hr className="sidebar-divider d-none d-md-block" />
	</ul>
);


export default SideNav;

