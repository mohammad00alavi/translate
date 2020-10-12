import React, { useContext } from "react";
import UserCreate from "./UserCreate";
import { Context } from "../contexts/MainProvider";

export default function App() {
	const { setValue, currentLang, languages } = useContext(Context);

	const languageChange = lang => {
		setValue({ currentLang: lang });
	};

	return (
		<div className="ui container">
			<div>
				{languages[currentLang].text}
				{Object.keys(languages).map(lang => (
					<i
						onClick={() => languageChange(lang)}
						className={languages[lang].country + " flag"}
						key={languages[lang].key}
					/>
				))}
			</div>
			<UserCreate />
		</div>
	);
}
