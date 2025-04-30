import { useEffect, useState } from "react";

const HolidaysPage = () => {
	const [holidays, setHolidays] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/blairanderson/holidays-api/master/public/holiday-data.json"
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.holidays) {
					const upcomingHolidays = data.holidays.filter((holiday) =>
						holiday.prettyDate.startsWith("2025")
					);
					setHolidays(upcomingHolidays);
				}
			})
			.catch((error) => console.error("Error fetching holidays:", error));
	}, []);

	return (
		<div className="holiday-list">
			{holidays.length > 0 ? (
				holidays.map((holiday, index) => (
					<p key={index}>
						{holiday.name} - {holiday.prettyDate} ({holiday.dayOfWeek})
					</p>
				))
			) : (
				<p>No holidays found for 2025.</p>
			)}
		</div>
	);
};

export default HolidaysPage;
