import React, { useRef, useContext } from "react";
import { Context } from "../contexts/MainProvider";

export default function Field() {
	const { language } = useContext(Context);
	const textInput = useRef();
	const handleHover = () => {
		textInput.current.focus();
	};
	return (
		<div className="ui field">
			<label>{language === "english" ? "Name" : "Naam"}</label>
			<input ref={textInput} type="text" onMouseEnter={handleHover} />
		</div>
	);
}
