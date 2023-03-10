import axios from "axios";

interface Datas {
	data: {
		secret: string;
		aliasImg: string;
		alias: string;
		comments: [];
	};
}

export default async function GetSecret(id: string | undefined, index: string | undefined) {
	try {
		if (id && index) {
			const idInt = parseInt(id);
			const indexInt = parseInt(index);
			const { data }: Datas = await axios.post("https://gopon-server.onrender.com/getSecret", {
				id: idInt,
				index: indexInt,
			});
			const userData = {
				secret: data.secret,
				aliasImg: data.aliasImg,
				alias: data.alias,
				comments: data.comments,
			};
			return userData;
		}
	} catch (err) {
		throw err;
	}
}
