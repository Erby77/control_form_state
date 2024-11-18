import { useState } from "react";

function MyTitleForm() {
	const [title, setTitle] = useState("J'affiche mon titre");

	const handleTitleChange = (event) => {
		const newTitle = event.target.value
			.split("")
			.filter((char) => !char.includes("*"))
			.join("");
		setTitle(newTitle);
	};

	return (
		<header>
			<h1>{title}</h1>
			<label htmlFor="title">Title : </label>
			<input
				id="title"
				type="text"
				value={title}
				onChange={handleTitleChange}
			/>
		</header>
	);
}

export default MyTitleForm;
