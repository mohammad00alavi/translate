import React, { useState } from "react";
import UserCreate from "./UserCreate";

export default function App() {
	const [lang, setLang] = useState("english");

	const languageChange = language => {
		setLang(language);
	};

	return (
		<div className="ui container">
			<div>
				Select a language:{" "}
				<i onClick={() => languageChange("english")} class="us flag"></i>{" "}
				<i onClick={() => languageChange("dutch")} class="nl flag"></i>
			</div>
			<UserCreate />
		</div>
	);
}
