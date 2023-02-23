import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Secret from "./pages/Secret";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/post/:id/:index" element={<Secret />} />
			</Routes>
		</BrowserRouter>
	);
}
