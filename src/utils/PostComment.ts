import axios from "axios";

interface Comment {
	index: string | undefined;
	idOfPost: string | undefined;
	idOfCommentator: string;
	alias: string;
	aliasImg: string;
	comment: string;
}

export default async function PostComment(comment: Comment) {
	try {
		const comments = await axios.post("http://localhost:5000/postComment", comment);
		return comments;
	} catch (err) {
		throw err;
	}
}
