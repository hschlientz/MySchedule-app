import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
		if (loggedInUser) {
			setUser(loggedInUser);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("loggedInUser");
		setUser(null);
	};

	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
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
					<div className="header-right">
						{user ? (
							<div>
								<span>{user.username} is logged in</span>
								<button
									className="btn btn-outline-light ms-2"
									onClick={handleLogout}
								>
									Logout
								</button>
							</div>
						) : (
							<>
								<Link to="/login" className="btn btn-outline-light">
									Login
								</Link>
								<Link to="/register" className="btn btn-outline-light">
									Register
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
