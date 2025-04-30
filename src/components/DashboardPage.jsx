import "./DashboardPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import HolidaysPage from "./HolidaysPage";
import ScheduleTable from "./ScheduleTable";
import CalendarPage from "./CalendarPage";
import ToDoPage from "./ToDoPage";
import NotesPage from "./NotesPage";
import Header from "./Header";

const DashboardPage = () => {
	const [highlightedMeetings, setHighlightedMeetings] = useState([
		{ time: "11 AM", title: "Team Sync", page: "/schedule" },
	]);

	const [importantTodos, setImportantTodos] = useState([
		"Submit project report",
	]);

	return (
		<div className="main-container">
			<Header />
			<div className="content-wrapper">
				{" "}
				{/* ✅ Ensures content is visible */}
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
					{/* ✅ Updated Holidays Section */}
					<div className="holidays-section">
						<h3>Upcoming Holidays 🎉</h3>
						<HolidaysPage /> {/* ✅ Displays Holiday Data */}
					</div>

					{/* To-Do Section */}
					<div className="todo-section">
						<h3>Things to Do</h3>
						<ToDoPage /> {/* ✅ Displays To-Do Input */}
					</div>

					{/* Notes Section */}
					<div className="notes-section">
						<h3>Notes</h3>
						<NotesPage /> {/* ✅ Displays Notes Input */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default DashboardPage;
