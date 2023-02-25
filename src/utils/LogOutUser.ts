import axios from "axios";

export default async function LogOutUser() {
	try {
		const status: boolean = await axios({
			method: "GET",
			url: "https://gopon-server.onrender.com/logout",
			withCredentials: true,
		});
		console.log(status);

		return status;
	} catch (err) {
		throw err;
	}
}
