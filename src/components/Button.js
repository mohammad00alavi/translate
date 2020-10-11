import React, { useContext } from "react";
import { Context } from "../contexts/MainProvider";

export default function Button() {
	const { color, language } = useContext(Context);
	return (
		<button className={`ui button ${color}`}>
			{language === "english" ? "Submit" : "Voorleggen"}
		</button>
	);
}
