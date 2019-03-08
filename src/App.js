import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import store from "./store";
import Header from "./components/layout/Header";
import Dashboard from "./components/members/Dashboard";

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<LoadingBar style={{ backgroundColor: "#0069D9", height: "5px" }} />
					<div className="container">
						<Dashboard />
					</div>
				</Fragment>
			</Provider>
		);
	}
}

export default App;
