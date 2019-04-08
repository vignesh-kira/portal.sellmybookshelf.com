import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {API_SUCCESS} from "../../../constants/common";
import { withRouter } from 'react-router-dom';

class ProfileUpdateModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageModal: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const {profileUpdateStatus} = this.props;
		if(prevProps.profileUpdateStatus !==  profileUpdateStatus){
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
	profileUpdateStatus: state.profile.profileUpdateStatus
});


export default withCookies(withRouter(connect(mapStateToProps)(ProfileUpdateModal)));
