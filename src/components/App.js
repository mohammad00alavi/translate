import React from "react";
import UserCreate from "./UserCreate";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
	state = { language: "english", color: "red" };

	languageChange = (language, color) => {
		this.setState({ language, color });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					{this.state.language === "english"
						? "Select a language : "
						: "Selecteer een taal : "}
					<i
						onClick={() => this.languageChange("english", "red")}
						class="us flag"
					></i>
					<i
						onClick={() => this.languageChange("dutch", "yellow")}
						class="nl flag"
					></i>
				</div>
				<LanguageContexts.Provider value={this.state.language}>
					<ColorContext.Provider value={this.state.color}>
						<UserCreate />
					</ColorContext.Provider>
				</LanguageContexts.Provider>
			</div>
		);
	}
}

export default App;
