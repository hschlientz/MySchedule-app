import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
					<div className="container-fluid">
						<Link to="/" className="navbar-brand" href="#">
							Helen's Planner
						</Link>
						<div className="navbar-nav">
							<Link to="/" className="nav-link">
								Dashboard
							</Link>
							<Link to="/calendar" className="nav-link">
								Calendar
							</Link>
							<Link to="/todo" className="nav-link">
								To-Do
							</Link>
							<Link to="/notes" className="nav-link">
								Notes
							</Link>
							<Link to="/holidays" className="nav-link">
								Holidays
							</Link>
						</div>
					</div>
				</nav>
			</nav>
		</header>
	);
};

<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
	<div className="container">
		<a className="navbar-brand" href="#">
			Helen's Planner
		</a>
		<button
			className="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ms-auto">
				<li className="nav-item">
					<a className="nav-link" href="#">
						Dashboard
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Add Event
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Help
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>;

export default Header;
