import React from "react";
import UserCreate from "./UserCreate";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
	state = { language: "english" };

	languageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i onClick={() => this.languageChange("english")} class="us flag"></i>
					<i onClick={() => this.languageChange("dutch")} class="nl flag"></i>
				</div>
				<LanguageContexts.Provider value={this.state.language}>
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageContexts.Provider>
			</div>
		);
	}
}

export default App;
