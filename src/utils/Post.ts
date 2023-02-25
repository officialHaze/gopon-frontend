import axios from "axios";

export default async function Post(post: {
	alias: string;
	secret: string;
	id: string;
	aliasImg: string;
}) {
	try {
		const isUploaded: boolean = await axios.post(
			"https://gopon-server.onrender.com/upload-secret",
			post
		);
		return isUploaded;
	} catch (err) {
		throw err;
	}
}
