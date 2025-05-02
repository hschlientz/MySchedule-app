import React from "react";
import "./HelpPage.css";

const HelpPage = () => {
	return (
		<div className="help-container">
			<h1>How to Use the Planner</h1>

			{/* ✅ Overview Section */}
			<section className="help-section">
				<h2>Getting Started</h2>
				<p>
					Welcome to your Weekly Planner! Here’s how you can organize your
					schedule efficiently:
				</p>
				<ul>
					<li>
						<strong>Add Events:</strong> Click the "Add Event" button to enter
						important events.
					</li>
					<li>
						<strong>Edit Events:</strong> Click on an event inside a day's box
						to modify details.
					</li>
					<li>
						<strong>Track Tasks:</strong> Use the To-Do section to manage tasks.
					</li>
					<li>
						<strong>Save Notes:</strong> Use the Notes section to jot down ideas
						or reminders.
					</li>
					<li>
						<strong>Check Holidays:</strong> The Holidays section automatically
						fetches upcoming holidays.
					</li>
				</ul>
			</section>

			{/* ✅ FAQ Section */}
			<section className="help-section">
				<h2>Frequently Asked Questions</h2>
				<div className="faq-item">
					<h3>How do I delete an event?</h3>
					<p>
						Go to the specific day's box and click on the event you'd like to
						remove.
					</p>
				</div>
				<div className="faq-item">
					<h3>Can I change the week view?</h3>
					<p>
						Yes! You can enter a date range in the "Week of" input field to
						update your planner.
					</p>
				</div>
			</section>
		</div>
	);
};

export default HelpPage;
