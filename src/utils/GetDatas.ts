import axios from "axios";

export default async function GetDatas() {
	try {
		const { data } = await axios({
			method: "GET",
			url: "https://gopon-server.onrender.com/secrets",
			withCredentials: true,
		});
		return data;
	} catch (err) {
		throw err;
	}
}
