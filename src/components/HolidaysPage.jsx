import { useEffect, useState } from "react";

const HolidaysPage = () => {
	const [holidays, setHolidays] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/blairanderson/holidays-api/master/public/holiday-data.json"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("Holiday Data:", data.holidays); // ✅ Debugging step

				// ✅ Filter only holidays from 2025
				const upcomingHolidays = data.holidays.filter((holiday) =>
					holiday.prettyDate.startsWith("2025")
				);
				setHolidays(upcomingHolidays);
			})
			.catch((error) => console.error("Error fetching holidays:", error));
	}, []);

	return (
		<div>
			<h2>Upcoming Holidays 🎉</h2>
			{holidays.length > 0 ? (
				<ul>
					{holidays.map((holiday, index) => (
						<li key={index}>
							{holiday.name} - {holiday.prettyDate} ({holiday.dayOfWeek})
						</li>
					))}
				</ul>
			) : (
				<p>No holidays found for 2025.</p>
			)}
		</div>
	);
};

export default HolidaysPage;
