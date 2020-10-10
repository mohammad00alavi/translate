import React, { useRef } from "react";
import LanguageContexts from "../contexts/LanguageContexts";

export default function Field() {
	const renderText = text => {
		return text === "english" ? "Name" : "Naam";
	};
	const textInput = useRef();
	const handleHover = () => {
		textInput.current.focus();
	};
	return (
		<div className="ui field">
			<label>
				<LanguageContexts.Consumer>
					{text => renderText(text)}
				</LanguageContexts.Consumer>
			</label>
			<input ref={textInput} type="text" onMouseEnter={handleHover} />
		</div>
	);
}
