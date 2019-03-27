import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {withCookies} from "react-cookie";

class LogoutModal extends React.Component {
	toggle = () =>{
		this.props.toggle();
	};

	logout = (cookies) => {
		cookies.remove('user');
		window.location = '/';
	};

	render() {
		const {cookies, modal} = this.props;
		return (
			<Modal isOpen={modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Logout</ModalHeader>
				<ModalBody>
					Are you sure, you would like to Logout?
				</ModalBody>
				<ModalFooter style={{justifyContent: 'center'}}>
					<Button
						color="danger" size='lg'
						onClick={() =>this.logout(cookies)}
					>
						Yes
					</Button>
					<Button color="primary" size='lg' onClick={this.toggle}>No</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default withCookies(LogoutModal);
