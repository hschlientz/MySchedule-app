import "./DashboardPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import HolidaysPage from "./HolidaysPage";
import ScheduleTable from "./ScheduleTable";
import CalendarPage from "./CalendarPage";
import Header from "./Header";

const DashboardPage = () => {
	const [tasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
	const [notes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
	const holidays = JSON.parse(localStorage.getItem("holidays")) || []; // ✅ Pull from stored API data

	return (
		<div className="main-container">
			<Header />
			<div className="content-wrapper">
				<h1 className="text-center">Helen's Dashboard</h1>

				{/* Weekly Planner */}
				<div className="dashboard-header">
					<h2>Weekly Planner</h2>
					<div className="week-of">
						<label>Week of:</label>
						<input
							type="text"
							className="week-input"
							placeholder="Enter date range"
						/>
					</div>
				</div>

				{/* Days of the Week Grid */}
				<div className="week-grid">
					{[
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					].map((day) => (
						<div key={day} className="day-box">
							<h3>{day}</h3>
							<textarea placeholder="Your tasks for today..." />
						</div>
					))}
				</div>

				{/* Bottom Sections */}
				<div className="bottom-sections">
					{/* Holidays Section */}
					<div className="holidays-section">
						<h3>Upcoming Holidays 🎉</h3>
						<div className="holiday-list">
							{holidays.map((holiday, index) => (
								<p key={index}>{holiday.name}</p>
							))}
						</div>
						<HolidaysPage />
					</div>

					{/* To-Do Section */}
					<div className="todo-section">
						<h3>Things to Do</h3>
						<ul>
							{tasks.map((task, index) => (
								<li key={index}>{task}</li>
							))}
						</ul>
						<Link to="/todo">
							<button className="btn btn-primary">Add Task</button>{" "}
							{/* ✅ Redirects to To-Do Page */}
						</Link>
					</div>

					{/* Notes Section */}
					<div className="notes-section">
						<h3>Notes</h3>
						<ul>
							{notes.map((note, index) => (
								<li key={index}>{note.subject}</li>
							))}
						</ul>
						<Link to="/notes">
							<button className="btn btn-primary">Add Note</button>{" "}
							{/* ✅ Redirects to Notes Page */}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
