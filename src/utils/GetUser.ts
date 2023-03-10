import axios from "axios";

interface User {
	data: {
		_id: number;
		proPic: string;
		alias: string;
		aliasImg: string;
	};
}

export default async function GetUser() {
	try {
		const user: User = await axios({
			method: "GET",
			url: "https://gopon-server.onrender.com/user",
			withCredentials: true,
		});
		return user;
	} catch (err) {
		throw err;
	}
}
