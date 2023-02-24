import axios from "axios";

export default async function GetDatas() {
	try {
		const { data } = await axios({
			method: "GET",
			url: "https://gopon-backend.vercel.app/secrets",
			withCredentials: true,
		});
		return data;
	} catch (err) {
		throw err;
	}
}
