import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as MemberActions from "../../store/actions/member";

class MembersList extends Component {
	static propTypes = {
		members: PropTypes.array.isRequired,
	};

	componentDidMount () {
		this.props.getMembers();
	}

	render () {
		return (
			<Fragment>
				<h3>Members List</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>NAME</th>
							<th>AGE</th>
							<th>ADDRESS</th>
							<th>TELEPHONE</th>
							<th>EMAIL</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{this.props.members &&
							this.props.members.map(member => (
								<tr key={member._id}>
									<td>{member.name}</td>
									<td>{member.age}</td>
									<td>{member.address}</td>
									<td>{member.telephone}</td>
									<td>{member.email}</td>
									<td>
										<button className="btn btn-danger btn-sm">Delete</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	members: state.memberReducer.members.docs,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(MemberActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
