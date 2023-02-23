import axios from "axios";

export default async function GetDatas() {
	try {
		const { data } = await axios({
			method: "GET",
			url: "http://localhost:5000/secrets",
			withCredentials: true,
		});
		return data;
	} catch (err) {
		throw err;
	}
}
