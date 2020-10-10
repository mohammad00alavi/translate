import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

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
				<i onClick={() => languageChange("english", "red")} className="us flag"></i>
				<i
					onClick={() => languageChange("dutch", "yellow")}
					className="nl flag"
				></i>
			</div>
			<LanguageContexts.Provider value={langCol.language}>
				<ColorContext.Provider value={langCol.color}>
					<UserCreate />
				</ColorContext.Provider>
			</LanguageContexts.Provider>
		</div>
	);
}
