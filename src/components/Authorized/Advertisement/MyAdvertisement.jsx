import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import { Alert } from 'reactstrap';
import Moment from 'react-moment';

import SideNav  from '../common/SideNav'
import TopNav  from '../common/TopNav'
import PageTitle  from '../common/PageTitle'
import Footer  from '../../Shared/Footer'
import {advertisementFetchMyads, advertisementDelete} from "../../../actions/portal";
import book from "../../../images/book.png";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {API_ERROR, API_SUCCESS} from "../../../constants/common";

class MyAdvertisement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deleteModal: false,
			deleteAdvertisementId: '',
			alertShow: false,
			deleteSuccessMessage: 'Advertisement has been deleted successfully!',
			deleteErrorMessage: 'Advertisement was not deleted. Please try again later!'
		};
	}

	componentDidMount() {
		const { cookies } = this.props;
		const {id} = cookies.get('user');
		this.props.advertisementFetchMyads({id});
	}

	componentDidUpdate(prevProps, prevState) {
		const {advertisementDeleteStatus} = this.props;
		if((prevProps.advertisementDeleteStatus !==  advertisementDeleteStatus) && (advertisementDeleteStatus === API_SUCCESS)){
			this.toggleAlert();
		}
	}

	deleteMyAdvertisement = () => {
		const { cookies, advertisementDelete } = this.props;
		const userId = cookies.get('user').id;

		advertisementDelete({
			id: this.state.deleteAdvertisementId,
			userId
		});
		this.toggleDeleteModal('');
	};

	toggleDeleteModal = (id) =>{
		this.setState(prevState => ({
			deleteModal: !prevState.deleteModal,
			deleteAdvertisementId: id
		}));
	};

	toggleAlert = () => {
		this.setState(prevState => ({ alertShow: !prevState.alertShow }));
	};

	advertisementItemUI = (advertisement) => (
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
					<div>
						<p className="text-right">
							<Moment date={advertisement.createdAt} fromNow ago/>
						</p>
						<div  style={{alignSelf: 'center'}}>
							<Link to={`/advertisement/edit/${advertisement.id}`}
							      className="btn btn-primary btn-lg"
							>
								Edit
							</Link>
							<button
								className="btn btn-danger btn-lg myAdDelete"
								onClick={() =>this.toggleDeleteModal(advertisement.id)}
							>
								Delete
							</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	);

	populateAdvertisementItems = () =>{
		const {advertisementMyads} = this.props;
		return advertisementMyads.map( advertisement =>{
			return this.advertisementItemUI(advertisement);
		});
	};

	render() {
		const { advertisementMyadsFetchStatus, advertisementMyads, advertisementDeleteStatus } = this.props;
		const { deleteModal, alertShow, deleteSuccessMessage, deleteErrorMessage } = this.state;
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
							<PageTitle title="My Advertisements"/>

							{/* Alert Delete */}
							<Alert color="success" isOpen={alertShow && advertisementDeleteStatus === API_SUCCESS} toggle={this.toggleAlert}>
								<strong> {deleteSuccessMessage} </strong>
							</Alert>
							<Alert color="danger" isOpen={alertShow && advertisementDeleteStatus === API_ERROR} toggle={this.toggleAlert}>
								<strong> {deleteErrorMessage} </strong>
							</Alert>

							<div className="col-md-12 text-left"
							     style={{
								     border: '1px solid rgba(0, 0, 0, 0.125)',
								     borderRadius: '5px',
								     padding: '30px'
							     }}>
								{/* Books Count Section */}
								<div className="row">
									<h6 className="text-left">{advertisementMyads.length} books are listed.</h6>
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
				<Modal isOpen={deleteModal} toggle={this.toggleDeleteModal}>
					<ModalHeader toggle={this.toggleDeleteModal}>Logout</ModalHeader>
					<ModalBody>
						Are you sure, you would like to Delete the advertisement?
					</ModalBody>
					<ModalFooter style={{justifyContent: 'center'}}>
						<Button
							color="danger" size='lg'
							onClick={() =>this.deleteMyAdvertisement()}
						>
							Yes
						</Button>
						<Button color="primary" size='lg' onClick={this.toggleDeleteModal}>No</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	user: state.common.user,
	cookies: ownProps.cookies,
	advertisementMyads: state.advertisement.advertisementMyads,
	advertisementMyadsFetchStatus: state.advertisement.advertisementMyadsFetchStatus,
	advertisementDeleteStatus: state.advertisement.advertisementDeleteStatus,
});

const mapDispatchToProps = {
	advertisementFetchMyads,
	advertisementDelete
};

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(MyAdvertisement));
