import React from "react";

export const Context = React.createContext({});

export default class MainProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "",
			language: "",
			languageChange: this.languageChange
		};
	}

	languageChange = (language, firstLang, secondLang) => {
		return (
			language === "english" ? firstLang : secondLang
		)
	}

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}
