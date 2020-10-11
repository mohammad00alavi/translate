import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Context } from './contexts/MainProvider';



ReactDOM.render(
	<React.StrictMode>
		<Context.Provider>
			<App />
		</Context.Provider>

	</React.StrictMode>,
	document.getElementById("root")
);
