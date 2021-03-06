import React from "react";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<a className="navbar-brand" href="/">
				Church Members
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto" />
			</div>
		</nav>
	);
};

export default Header;
