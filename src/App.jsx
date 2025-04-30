import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScheduleTable from "./components/ScheduleTable";
import AddEvent from "./components/AddEvent";
import Header from "./components/Header";
import DashboardPage from "./components/DashboardPage";
import CalendarPage from "./components/CalendarPage";
import ToDoPage from "./components/ToDoPage";
import NotesPage from "./components/NotesPage";
import HolidaysPage from "./components/HolidaysPage";

function App() {
	const [events, setEvents] = useState([]);
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/calendar" element={<CalendarPage events={events} />} />
				<Route path="/todo" element={<ToDoPage />} />
				<Route path="/notes" element={<NotesPage />} />
				<Route path="/holidays" element={<HolidaysPage />} />
				<Route path="/add-event" element={<AddEvent />} />
			</Routes>
		</Router>
	);
}

export default App;
