import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./ScheduleTable.css";
import { Link } from "react-router-dom";

const ScheduleTable = ({ events = [] }) => {
	const daysOfWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	return (
		<>
			<div className="idance">
				<div className="schedule content-block">
					<div className="container-fluid">
						<div className="timetable">
							<div className="tab-content">
								<div className="tab-pane show active">
									<div className="row">
										{daysOfWeek.map((day, index) => (
											<div key={index} className="col-md-6">
												<div className="timetable-item">
													<div className="timetable-item-img">
														<img
															src="https://media.istockphoto.com/id/181866332/photo/red-wall-calendar.jpg?s=1024x1024&w=is&k=20&c=4jpxBh7eHc5VA2rqXdl3_s2NUPFeJpDSW4-q-H1rkOs="
															alt={`${day} Event`}
														/>
													</div>
													<div className="timetable-item-main">
														<div className="timetable-item-name">
															{day} Events
														</div>
														<div className="timetable-item-time">Time TBD</div>
														<Link
															to={`/add-event?day=${day}`}
															className="btn btn-primary btn-book"
														>
															Add Event
														</Link>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ScheduleTable;
