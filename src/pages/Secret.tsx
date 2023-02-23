import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSecret from "../utils/GetSecret";
import GetUser from "../utils/GetUser";
import PostComment from "../utils/PostComment";
import { RiSendPlane2Fill } from "react-icons/ri";
import Comments from "../components/Comments";
import Authenticate from "../utils/Authenticate";
import SignIn from "./SignIn";
import Navbar from "../components/Navbar";
import "./Secret.css";
import UploadSuccessPopUp from "../components/UploadSuccessPopUp";

const getSecret = async (id: string | undefined, index: string | undefined) => {
	try {
		const data = await GetSecret(id, index);
		return data;
	} catch (err) {
		throw err;
	}
};

export default function Secret() {
	const { id, index } = useParams();
	const isAuthenticated = Authenticate();
	const [userData, setUserData] = useState({
		secret: "",
		aliasImg: "",
		alias: "",
		comments: [],
	});
	const [comment, updateComment] = useState({
		index: index,
		idOfPost: id,
		idOfCommentator: "",
		alias: "",
		aliasImg: "",
		comment: "",
	});

	const [uploaded, uploadStatus] = useState(false);

	useEffect(() => {
		if (isAuthenticated) {
			getSecret(id, index)
				.then((data) => {
					setUserData((prevObj) => {
						return {
							...prevObj,
							secret: data ? data.secret : "",
							aliasImg: data ? data.aliasImg : "",
							alias: data ? data.alias : "",
							comments: data ? data.comments : [],
						};
					});
				})
				.catch((err) => {
					console.log(err);
				});

			GetUser()
				.then((user) => {
					const { _id, alias, aliasImg } = user.data;
					const id = JSON.stringify(_id);
					updateComment((prevObj) => {
						return {
							...prevObj,
							idOfCommentator: id,
							alias: alias ? alias : `user:${id}`,
							aliasImg: aliasImg
								? aliasImg
								: "https://cdn-icons-png.flaticon.com/512/1144/1144709.png",
						};
					});
				})
				.catch((err) => {
					console.log(err);
				});

			setTimeout(() => {
				uploadStatus(false);
			}, 3000);
		}
	}, [id, index, isAuthenticated, uploaded]);

	return isAuthenticated ? (
		<>
			<Navbar />
			{uploaded && <UploadSuccessPopUp contentType="comment" />}
			<div className="main">
				<div className="user-details-container">
					<div className="user-alias-img-container">
						<img src={userData.aliasImg} alt="alias" />
					</div>
					<div>
						<h1>{userData.alias}</h1>
					</div>
				</div>

				<div className="user-secret">
					<p>{userData.secret}</p>
				</div>

				<div className="post-comments">
					<div>
						<h3>Comments({userData.comments.length})</h3>
					</div>

					<div className="comments-container">
						{userData.comments.map(
							(
								comment: { id: number; alias: string; aliasImg: string; comment: string },
								index
							) => {
								return (
									<Comments
										key={index}
										id={comment.id}
										alias={comment.alias}
										aliasImg={comment.aliasImg}
										comment={comment.comment}
									/>
								);
							}
						)}
					</div>

					<div className="write-comment-container">
						<textarea
							onChange={(e: { target: { value: string } }) => {
								const { value } = e.target;
								updateComment((prevObj) => {
									return {
										...prevObj,
										comment: value,
									};
								});
							}}
							rows={10}
							cols={70}
							placeholder="Post a comment.."
							value={comment.comment}
						/>
						{comment.comment !== "" && (
							<button
								onClick={async () => {
									try {
										const comments = await PostComment(comment);
										setUserData((prevObj) => {
											return {
												...prevObj,
												comments: comments.data,
											};
										});
										updateComment((prevObj) => {
											return {
												...prevObj,
												comment: "",
											};
										});
										uploadStatus(true);
									} catch (err) {
										console.log(err);
									}
								}}
							>
								<RiSendPlane2Fill />
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	) : (
		<SignIn />
	);
}
