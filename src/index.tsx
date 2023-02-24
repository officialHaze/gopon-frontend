import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./Global-Styles.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
