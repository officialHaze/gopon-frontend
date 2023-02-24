import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Secret from "./pages/Secret";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/post/:id/:index" element={<Secret />} />
			</Routes>
		</AnimatePresence>
	);
}
