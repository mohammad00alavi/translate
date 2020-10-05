import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";

export default function Field() {
	const renderText = text => {
		return text === "english" ? "Name" : "Naam";
	};
	return (
		<div className="ui field">
			<label>
				<LanguageContexts.Consumer>
					{text => renderText(text)}
				</LanguageContexts.Consumer>
			</label>
			<input type="text" />
		</div>
	);
}
