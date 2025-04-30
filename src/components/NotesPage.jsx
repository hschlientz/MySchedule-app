import { useState } from "react";

const NotesPage = () => {
	const [notes, setNotes] = useState([]);
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");

	const handleAddNote = () => {
		if (subject.trim() === "" || description.trim() === "") return; // ✅ Ignore empty entries
		const newNote = { subject, description };
		setNotes([...notes, newNote]); // ✅ Add note to list
		setSubject(""); // ✅ Clear input fields
		setDescription("");
	};

	return (
		<div>
			<h2>Notes 📌</h2>
			<input
				type="text"
				placeholder="Enter a subject..."
				value={subject}
				onChange={(e) => setSubject(e.target.value)}
			/>
			<textarea
				placeholder="Enter description..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button onClick={handleAddNote}>Add Note</button>

			<ul>
				{notes.map((note, index) => (
					<li key={index}>
						<strong>{note.subject}</strong>: {note.description}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NotesPage;
