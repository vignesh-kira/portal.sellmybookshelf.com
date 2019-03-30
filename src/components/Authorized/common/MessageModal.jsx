import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withCookies} from "react-cookie";
import {connect} from "react-redux";
import {advertisementCreate, fetchClasses, fetchSubjects} from "../../../actions/portal";
import {API_SUCCESS} from "../../../constants/common";
import { withRouter } from 'react-router';

class MessageModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageModal: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const {advertisementCreateStatus} = this.props;
		if(prevProps.advertisementCreateStatus !==  advertisementCreateStatus){
			this.toggle();
		}
	}

	toggle = () =>{
		const {advertisementCreateStatus, history} = this.props;
		const {messageModal} = this.state;
		if(messageModal && advertisementCreateStatus === API_SUCCESS ){
			return history.push("/advertisement/list");
		}
		this.setState(prevState => ({
			messageModal: !prevState.messageModal
		}));
	};

	modalMessage = (status) => (
		status === API_SUCCESS
			? 'Advertisement has been created successfully!'
			: 'Advertisement was not created successfully. Please try again later!'
	);

	render() {
		const {cookies, modal, advertisementCreateStatus} = this.props;
		const {messageModal} = this.state;

		return (
			<Modal isOpen={messageModal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Logout</ModalHeader>
				<ModalBody>
					{this.modalMessage(advertisementCreateStatus)}
				</ModalBody>
				<ModalFooter style={{justifyContent: 'center'}}>
					<Button color="primary" size='lg' onClick={this.toggle}>close</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	advertisementCreateStatus: state.login.advertisementCreateStatus
});

// const mapDispatchToProps = {
// 	fetchClasses
// };

export default withCookies(withRouter(connect(mapStateToProps)(MessageModal)));
