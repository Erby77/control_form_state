import { useState } from "react";

function MyTitleForm() {
	const [title, setTitle] = useState("J'affiche ici mon texte");

	const handleTitleChange = (event) => {
		const newTitle = event.target.value.split("").join("");
		setTitle(newTitle);
	};

	return (
		<header>
			<h1>{title}</h1>
			<label htmlFor="text">Entrer son texte : </label>
			<input type="sting" value={title} onChange={handleTitleChange} />
		</header>
	);
}

export default MyTitleForm;
