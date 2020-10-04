import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
	renderSubmit(value) {
		return value === "english" ? "Submit" : "Voorleggen";
	}
	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContexts.Consumer>
					{value => this.renderSubmit(value)}
				</LanguageContexts.Consumer>
			</button>
		);
	}
	render() {
		return (
			<ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>
		);
	}
}

export default Button;
