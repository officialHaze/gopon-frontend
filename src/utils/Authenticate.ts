import { useState } from "react";
import axios from "axios";

export default function Authenticate(): boolean {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	authenticate();

	async function authenticate() {
		try {
			const { data } = await axios({
				method: "GET",
				url: "http://localhost:5000/authenticate",
				withCredentials: true,
			});
			setIsAuthenticated(data);
		} catch (err) {
			throw err;
		}
	}

	return isAuthenticated;
}
