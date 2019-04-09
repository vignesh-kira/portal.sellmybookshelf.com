import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {API_SUCCESS} from "../../../constants/common";
import { withRouter } from 'react-router-dom';
import {globalAlertTurnOff} from "../../../actions/portal";

class AdvertisementUpdateModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageModal: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const {advertisementUpdateStatus, advertisementAlert} = this.props;

		if(advertisementUpdateStatus === API_SUCCESS && advertisementAlert){
			this.props.globalAlertTurnOff();
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
	advertisementUpdateStatus: state.advertisement.advertisementUpdateStatus,
	advertisementAlert: state.advertisement.advertisementAlert
});

const mapDispatchToProps = {
	globalAlertTurnOff
};

export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(AdvertisementUpdateModal)));
