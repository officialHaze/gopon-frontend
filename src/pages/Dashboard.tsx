import { useState, useEffect } from "react";
import { TbSend } from "react-icons/tb";
import Authenticate from "../utils/Authenticate";
import GetDatas from "../utils/GetDatas";
import Post from "../utils/Post";
import GetUser from "../utils/GetUser";
import SecretCards from "../components/SecretCards";
import Navbar from "../components/Navbar";
import UploadSuccessPopUp from "../components/UploadSuccessPopUp";
import { motion } from "framer-motion";
import CustomLoader from "../components/CustomLoader";
import "./Dashboard.css";

export default function Dashboard() {
	interface Secrets {
		alias: string;
		_id: number;
		proPic: string;
		aliasImg: string;
		secrets: [];
	}

	let index: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const isAuthenticated = Authenticate();
	const [secretPosts, setSecretPosts] = useState([]);
	const [post, updatePost] = useState({
		alias: "",
		secret: "",
		id: "",
		aliasImg: "",
	});
	const [uploaded, uploadStatus] = useState(false);
	const [isAliasPresent, aliasStatus] = useState(false);

	useEffect(() => {
		const getsecrets = async () => {
			let secrets: [] = [];
			if (isAuthenticated) {
				try {
					secrets = await GetDatas();
				} catch (err) {
					console.log(err);
				}
			}
			setSecretPosts(secrets);
		};

		const getUser = async () => {
			const { data } = await GetUser();
			updatePost((prevObj) => {
				const id = JSON.stringify(data._id);
				return {
					...prevObj,
					alias: data.alias !== `user:${id}` ? data.alias : "",
					aliasImg: data.aliasImg
						? data.aliasImg
						: "https://cdn-icons-png.flaticon.com/512/1144/1144709.png",
					id: id,
				};
			});
		};

		const updateAliasStatus = async () => {
			const { data } = await GetUser();
			const id = JSON.stringify(data._id);
			console.log(data.alias);

			data.alias === `user:${id}` || !data.alias ? aliasStatus(false) : aliasStatus(true);
		};

		setTimeout(() => {
			uploadStatus(false);
		}, 3000);

		getsecrets();
		getUser();
		updateAliasStatus();
	}, [isAuthenticated, uploaded]);

	const handleChange = (e: { target: { id: string; value: string } }) => {
		const { id, value } = e.target;
		switch (id) {
			case "alias":
				updatePost((prevObj) => {
					return {
						...prevObj,
						alias: value,
					};
				});
				break;

			case "secret":
				updatePost((prevObj) => {
					return {
						...prevObj,
						secret: value,
					};
				});
				break;

			default:
				break;
		}
	};

	return !isAuthenticated ? (
		new CustomLoader().start()
	) : (
		<>
			<Navbar />
			{uploaded && <UploadSuccessPopUp contentType="post" />}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="dashboard-container"
			>
				<div className="post-wrapper">
					<div className="post-container">
						{!isAliasPresent ? (
							<div className="alias-input-container">
								<input
									autoComplete="off"
									id="alias"
									placeholder="Name your alias..."
									onChange={handleChange}
									value={post.alias}
								/>
								{post.aliasImg && (
									<img width={50} height={50} src={post.aliasImg} alt="chosen alias" />
								)}
							</div>
						) : (
							<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
								<img style={{ width: "3rem", height: "3rem" }} src={post.aliasImg} alt="alias" />
								<h3>{post.alias}</h3>
							</div>
						)}
						<textarea
							onChange={handleChange}
							id="secret"
							cols={60}
							rows={10}
							placeholder="What's your secret today?"
							value={post.secret}
						/>
						{post.secret !== "" && (
							<button
								onClick={async () => {
									const isUploaded = await Post(post);
									isUploaded ? uploadStatus(true) : uploadStatus(false);
									updatePost((prevObj) => {
										return {
											...prevObj,
											secret: "",
										};
									});
								}}
							>
								<TbSend style={{ color: "white", fontSize: "1.25rem" }} />
							</button>
						)}
					</div>
					{!isAliasPresent && (
						<div className="alias-imgs-container">
							<div>
								<h3>Choose your alias image</h3>
							</div>
							<div className="alias-imgs">
								{index.map((i) => {
									return (
										<img
											key={i}
											onClick={() => {
												updatePost((prevObj) => {
													return {
														...prevObj,
														aliasImg: `https://cdn-icons-png.flaticon.com/128/663/66308${i}.png`,
													};
												});
											}}
											width={50}
											height={50}
											src={`https://cdn-icons-png.flaticon.com/128/663/66308${i}.png`}
											alt="alias"
										/>
									);
								})}
							</div>
						</div>
					)}
				</div>
				<div className="dashboard-cards-container">
					{secretPosts.map((post: Secrets) => {
						return (
							<div className="same-user-secret-cards-container" key={post._id}>
								{post.secrets.map((secretItem: { secret: string; comments: [] }, index) => {
									return (
										<motion.div
											initial={{ x: "-10rem" }}
											animate={{ x: 0 }}
											exit={{ x: "-10rem" }}
											transition={{ duration: `0.${index + 4}` }}
											style={{ borderBottom: "1px solid rgba(122, 122, 122, 0.3" }}
											key={index}
										>
											<SecretCards
												comments={secretItem.comments.length}
												href={`/post/${post._id}/${index}`}
												aliasImg={post.aliasImg}
												alias={post.alias}
												secret={secretItem.secret}
											/>
										</motion.div>
									);
								})}
							</div>
						);
					})}
				</div>
			</motion.div>
		</>
	);
}
