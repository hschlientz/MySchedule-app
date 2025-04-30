import { useState } from "react";
import "./AddEvent.css"; // Style it separately
import { useLocation } from "react-router-dom";

const AddEvent = ({ onAddEvent }) => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const selectedDay = queryParams.get("day");

	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventTime, setEventTime] = useState("");
	const [eventDescription, setEventDescription] = useState("");
	const [eventLocation, setEventLocation] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitting Event:", eventName, eventDate, eventTime);

		if (!eventName || !eventDate || !eventTime) {
			alert("Please fill out required fields.");
			return;
		}

		const newEvent = {
			name: eventName,
			date: eventDate,
			time: eventTime,
			description: eventDescription,
			location: eventLocation,
		};

		console.log("Adding event:", newEvent);
		onAddEvent(newEvent); // Send data to App component

		// Clear input fields after submission
		setEventName("");
		setEventDate("");
		setEventTime("");
		setEventDescription("");
		setEventLocation("");
	};

	return (
		<div className="add-event-container">
			<h1>Add Event for {selectedDay}</h1>
			<form onSubmit={handleSubmit}>
				<label>Event Name:</label>
				<input
					type="text"
					value={eventName}
					onChange={(e) => setEventName(e.target.value)}
					required
				/>

				<label>Date:</label>
				<input
					type="date"
					value={eventDate}
					onChange={(e) => setEventDate(e.target.value)}
					required
				/>

				<label>Time:</label>
				<input
					type="time"
					value={eventTime}
					onChange={(e) => setEventTime(e.target.value)}
					required
				/>

				<label>Description:</label>
				<textarea
					value={eventDescription}
					onChange={(e) => setEventDescription(e.target.value)}
				></textarea>

				<label>Location:</label>
				<input
					type="text"
					value={eventLocation}
					onChange={(e) => setEventLocation(e.target.value)}
				/>

				<button type="submit" className="btn-add-event">
					Add Event
				</button>
			</form>
		</div>
	);
};

export default AddEvent;
