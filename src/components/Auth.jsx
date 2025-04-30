import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

function Auth({ isRegistering }) {
	const navigate = useNavigate(); // ✅ Initialize navigate function
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		username: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isRegistering) {
			if (
				!formData.name ||
				!formData.email ||
				!formData.username ||
				!formData.password
			) {
				setError("All fields are required.");
				return;
			}
			if (!/\S+@\S+\.\S+/.test(formData.email)) {
				setError("Invalid email format.");
				return;
			}
			localStorage.setItem("user", JSON.stringify(formData));
			alert("Account Created!");
			navigate("/"); // ✅ Redirects user to Dashboard after successful registration
		} else {
			const storedUser = JSON.parse(localStorage.getItem("user"));
			if (
				!storedUser ||
				storedUser.username !== formData.username ||
				storedUser.password !== formData.password
			) {
				setError("Invalid username or password.");
				return;
			}
			localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
			alert(`Welcome back, ${storedUser.name}!`);
			navigate("/"); // ✅ Redirects user to Dashboard after login
		}
		setError("");
	};

	return (
		<div className="auth-container">
			<h2>{isRegistering ? "Create an Account" : "Login"}</h2>
			<form onSubmit={handleSubmit}>
				{isRegistering && (
					<input
						type="text"
						name="name"
						placeholder="Name"
						onChange={handleChange}
					/>
				)}
				{isRegistering && (
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
					/>
				)}
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
				<button type="submit">{isRegistering ? "Register" : "Login"}</button>
				{error && <p className="error">{error}</p>}
			</form>
		</div>
	);
}

export default Auth;
