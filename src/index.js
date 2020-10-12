import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MainProvider from "./contexts/MainProvider";

ReactDOM.render(
	<React.StrictMode>
		<MainProvider>
			<App />
		</MainProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
