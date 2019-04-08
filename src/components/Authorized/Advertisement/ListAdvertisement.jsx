import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {advertisementsListFetch} from "../../../actions/portal";
import book from "../../../images/book.png";

class ListAdvertisement extends Component {
	componentDidMount() {
		this.props.advertisementsListFetch();
	}

	advertisementItemUI = (advertisement) => {
		// {class,subject,advertisementStatus,book_final_price}

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
		const {advertisementsList} = this.props;
		return advertisementsList.map( advertisement =>{
			return this.advertisementItemUI(advertisement);
		});
	};

	render() {
		const { advertisementsListFetchStatus, advertisementsList } = this.props;

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
								{/* Books Count Section */}
								<div className="row">
									<h6 className="text-left">{advertisementsList.length} books are listed.</h6>
								</div>

								{/* Books Advertisement Section */}
								{this.populateAdvertisementItems()}

								{/* Pagination Section */}
								<div className="row">

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
	user: state.common.user,
	cookies: ownProps.cookies,
	advertisementsList: state.advertisement.advertisementsList,
	advertisementsListFetchStatus: state.advertisement.advertisementsListFetchStatus
});

const mapDispatchToProps = {
	advertisementsListFetch
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ListAdvertisement));
