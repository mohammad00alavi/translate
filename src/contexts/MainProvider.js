import React from "react";

export const Context = React.createContext({});

export default class MainProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: {
				en: {
					language: "English",
					color: "red",
					country: "us",
					text: "Select a language : ",
					name: "Name",
					btnText: "Submit",
					key: 1,
				},
				de: {
					language: "Deutsch",
					color: "yellow",
					country: "nl",
					text: "Selecteer een taal : ",
					name: "Naam",
					btnText: "Voorleggen",
					key: 2,
				},
				fa: {
					language: "فارسی",
					color: "green",
					country: "ir",
					text: "زبان را انتخاب کنید : ",
					name: "نام",
					btnText: "تایید",
					key: 3,
				},
			},
			currentLang: "en",
			setValue: this.setValue,
		};
	}

	setValue = value => this.setState(value);

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}
