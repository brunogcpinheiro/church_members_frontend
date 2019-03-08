import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TiUserAdd } from "react-icons/ti";
import Modal from "react-responsive-modal";
import * as MemberActions from "../../store/actions/member";

const buttonStyles = {
	margin: "50px 0",
};

class AddMember extends Component {
	state = {
		name: "",
		age: "",
		address: "",
		telephone: "",
		email: "",
		open: false,
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({
			open: false,
			name: "",
			age: "",
			address: "",
			telephone: "",
			email: "",
		});
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const { name, age, address, telephone, email } = this.state;

		const newMember = {
			name,
			age,
			address,
			telephone,
			email,
		};

		this.props.addMember(newMember);

		this.setState({
			name: "",
			age: "",
			address: "",
			telephone: "",
			email: "",
			open: false,
		});
	};

	render () {
		const { name, age, address, telephone, email, open } = this.state;
		return (
			<Fragment>
				<button
					type="button"
					className="btn btn-primary"
					style={buttonStyles}
					onClick={this.onOpenModal}>
					<TiUserAdd /> Add Member
				</button>
				<Modal
					open={open}
					onClose={this.onCloseModal}
					center
					styles={{
						modal: { width: "100%" },
					}}>
					<div className="card card-body mt-4 mb-4">
						<h2>Add Member</h2>
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<label>Name</label>
								<input
									className="form-control"
									type="text"
									name="name"
									onChange={this.onChange}
									value={name}
								/>
							</div>
							<div className="form-group">
								<label>Age</label>
								<input
									className="form-control"
									type="text"
									name="age"
									onChange={this.onChange}
									value={age}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									className="form-control"
									type="text"
									name="address"
									onChange={this.onChange}
									value={address}
								/>
							</div>
							<div className="form-group">
								<label>Telephone</label>
								<input
									className="form-control"
									type="text"
									name="telephone"
									onChange={this.onChange}
									value={telephone}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									className="form-control"
									type="text"
									name="email"
									onChange={this.onChange}
									value={email}
								/>
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(MemberActions, dispatch);

export default connect(null, mapDispatchToProps)(AddMember);
