import { useState } from "react";

const ToDoPage = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleAddTask = () => {
		if (newTask.trim() === "") return;
		setTasks([...tasks, newTask]); //  Add task to list
		setNewTask(""); // Clear input field
	};

	return (
		<div>
			<h2>To-Do List 📝</h2>
			<input
				type="text"
				placeholder="Enter a task..."
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				style={{ width: "600px" }}
			/>
			<button
				onClick={handleAddTask}
				style={{
					backgroundColor: "green",
					color: "white",
					padding: "10px 15px",
					border: "none",
					cursor: "pointer",
				}}
			>
				Add Task
			</button>

			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
		</div>
	);
};

export default ToDoPage;
