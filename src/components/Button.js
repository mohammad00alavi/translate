import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

export default function Button() {
	const renderSubmit = value => {
		return value === "english" ? "Submit" : "Voorleggen";
	};
	const renderButton = color => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContexts.Consumer>
					{value => renderSubmit(value)}
				</LanguageContexts.Consumer>
			</button>
		);
	};
	return <ColorContext.Consumer>{color => renderButton(color)}</ColorContext.Consumer>;
}
