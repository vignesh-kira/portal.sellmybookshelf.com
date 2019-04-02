import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {API_SUCCESS} from "../../../constants/common";
import { withRouter } from 'react-router-dom';

class AdvertisementUpdateModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageModal: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const {advertisementUpdateStatus} = this.props;
		if(prevProps.advertisementUpdateStatus !==  advertisementUpdateStatus){
			this.toggle();
		}
	}

	toggle = () =>{
		this.setState(prevState => ({
			messageModal: !prevState.messageModal
		}));
	};

	modalMessage = (status) => (
		status === API_SUCCESS
			? 'Advertisement has been updated successfully!'
			: 'Advertisement was not updated. Please try again later!'
	);

	render() {
		const {advertisementUpdateStatus} = this.props;
		const {messageModal} = this.state;

		return (
			<Modal isOpen={messageModal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Logout</ModalHeader>
				<ModalBody>
					{this.modalMessage(advertisementUpdateStatus)}
				</ModalBody>
				<ModalFooter style={{justifyContent: 'center'}}>
					<Button color="primary" size='lg' onClick={this.toggle}>close</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	advertisementUpdateStatus: state.login.advertisementUpdateStatus
});

// const mapDispatchToProps = {
// 	fetchClasses
// };

export default withCookies(withRouter(connect(mapStateToProps)(AdvertisementUpdateModal)));
