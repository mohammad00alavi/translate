import React, { useState } from "react";
import UserCreate from "./UserCreate";
import { Context } from "../contexts/MainProvider";

export default function App() {
	const [langCol, setLangCol] = useState({ language: "english", color: "red" });
	const languageChange = (language, color) => {
		setLangCol({ language, color });
	};
	return (
		<div className="ui container">
			<div>
				{langCol.language === "english"
					? "Select a language : "
					: "Selecteer een taal : "}
				<i onClick={() => languageChange("english", "red")} className="us flag" />
				<i onClick={() => languageChange("dutch", "yellow")} className="nl flag" />
			</div>
			<Context.Provider value={langCol}>
				<UserCreate />
			</Context.Provider>
		</div>
	);
}
