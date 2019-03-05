import React, { Component, Fragment } from "react";
import AddMember from "./AddMember";
import MembersList from "./MembersList";

class Dashboard extends Component {
	render () {
		return (
			<Fragment>
				<AddMember />
				<MembersList />
			</Fragment>
		);
	}
}

export default Dashboard;
