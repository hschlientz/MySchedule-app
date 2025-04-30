import { Link } from "react-router-dom";
import ScheduleTable from "../components/ScheduleTable";

const CalendarPage = ({ events }) => {
	return (
		<div className="container mt-5">
			<h1>Calendar</h1>
			<Link to="/add-event">
				<button>Add Event</button>
			</Link>{" "}
			<ScheduleTable events={events} />
		</div>
	);
};

export default CalendarPage;
