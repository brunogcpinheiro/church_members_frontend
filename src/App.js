import React, { Component } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";

class App extends Component {
	render () {
		return (
			<div>
				<Header />
				<div className="wrapper">
					<Sidebar />
					<Dashboard />
				</div>
			</div>
		);
	}
}

export default App;
