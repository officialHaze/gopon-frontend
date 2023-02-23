import axios from "axios";

export default async function Post(post: {
	alias: string;
	secret: string;
	id: string;
	aliasImg: string;
}) {
	try {
		const isUploaded: boolean = await axios.post("http://localhost:5000/upload-secret", post);
		return isUploaded;
	} catch (err) {
		throw err;
	}
}
