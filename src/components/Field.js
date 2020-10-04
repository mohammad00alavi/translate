import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";

class Field extends React.Component {
	static contextType = LanguageContexts;
	render() {
		const text = this.context === "english" ? "Name" : "Naam";
		return (
			<div className="ui field">
				<label>{text}</label>
				<input type="text" />
			</div>
		);
	}
}

export default Field;
