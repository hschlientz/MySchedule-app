import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DashboardPage from "./components/DashboardPage";
import CalendarPage from "./components/CalendarPage";
import ToDoPage from "./components/ToDoPage";
import NotesPage from "./components/NotesPage";
import HolidaysPage from "./components/HolidaysPage";
import Auth from "./components/Auth"; // ✅ Import Auth for Register & Login

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/calendar" element={<CalendarPage />} />
				<Route path="/todo" element={<ToDoPage />} />
				<Route path="/notes" element={<NotesPage />} />
				<Route path="/holidays" element={<HolidaysPage />} />
				<Route path="/register" element={<Auth isRegistering={true} />} />{" "}
				{/* ✅ Separate Register Page */}
				<Route path="/login" element={<Auth isRegistering={false} />} />{" "}
				{/* ✅ Separate Login Page */}
			</Routes>
		</Router>
	);
}

export default App;
