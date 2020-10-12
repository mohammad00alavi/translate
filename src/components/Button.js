import React, { useContext } from "react";
import { Context } from "../contexts/MainProvider";

export default function Button() {
	const { languages, currentLang } = useContext(Context);
	return (
		<button className={`ui button ${languages[currentLang].color}`}>
			{languages[currentLang].btnText}
		</button>
	);
}
