import React, { useContext } from "react";
import { Context } from "../contexts/MainProvider";

export default function Button() {
	const { color, language, languageChange } = useContext(Context);
	return (
		<button className={`ui button ${color}`}>
			{/* {() => languageChange(language, "Submit", "Voorleggen")} */}
			{language === "english" ? "Submit" : "Voorleggen"}
		</button>
	);
}
