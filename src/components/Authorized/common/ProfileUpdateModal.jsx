import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {API_SUCCESS} from "../../../constants/common";
import { withRouter } from 'react-router-dom';
import {globalAlertTurnOff} from "../../../actions/portal";

class ProfileUpdateModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageModal: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const {profileUpdateStatus, profileAlert} = this.props;

		if(profileUpdateStatus === API_SUCCESS && profileAlert){
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
			? 'Profile has been updated successfully!'
			: 'Profile was not updated. Please try again later!'
	);

	render() {
		const {profileUpdateStatus} = this.props;
		const {messageModal} = this.state;

		return (
			<Modal isOpen={messageModal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Message:</ModalHeader>
				<ModalBody>
					{this.modalMessage(profileUpdateStatus)}
				</ModalBody>
				<ModalFooter style={{justifyContent: 'center'}}>
					<Button color="primary" size='lg' onClick={this.toggle}>close</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	profileUpdateStatus: state.profile.profileUpdateStatus,
	profileAlert: state.profile.profileAlert
});

const mapDispatchToProps = {
	globalAlertTurnOff
};

export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileUpdateModal)));
