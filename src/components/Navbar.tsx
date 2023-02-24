import { Link } from "react-router-dom";
import "./Navbar.css";
import Authenticate from "../utils/Authenticate";
import { useEffect, useState } from "react";
import LogOutUser from "../utils/LogOutUser";
import axios from "axios";
import { motion } from "framer-motion";

const getUserProfileImg = async () => {
	try {
		const { data }: { data: string } = await axios({
			method: "GET",
			url: "https://gopon-backend.vercel.app/userProfileImg",
			withCredentials: true,
		});
		return data;
	} catch (err) {
		throw err;
	}
};

export default function Navbar() {
	const [profilePic, setProfilePic] = useState({
		url: "",
	});
	const isAuthenticated = Authenticate();

	useEffect(() => {
		if (isAuthenticated) {
			getUserProfileImg()
				.then((imgUrl) => {
					console.log(imgUrl);

					setProfilePic((prevObj) => {
						return {
							...prevObj,
							url: imgUrl,
						};
					});
				})
				.catch((err) => {
					console.log(err);
				});
			// const getuser = async () => {
			// 	try {
			// 		const { data } = await GetUser();
			// 		setProfilePic((prevObj) => {
			// 			return {
			// 				...prevObj,
			// 				url: data.proPic,
			// 			};
			// 		});
			// 	} catch (err) {
			// 		console.log(err);
			// 	}
			// };
			// getuser();
		}
	}, [isAuthenticated]);

	return (
		<motion.div
			initial={{ y: "-5rem" }}
			animate={{ y: 0 }}
			exit={{ y: "-5rem" }}
			transition={{ duration: "0.5" }}
			className="nav-container"
		>
			<div className="logo">
				<Link to="/" className="link navbar-logo">
					<h2>Gopon</h2>
				</Link>
			</div>
			<div>
				{!isAuthenticated ? (
					<Link className="link" to="/sign-in">
						<button>Sign in</button>
					</Link>
				) : (
					<div className="profile-container">
						<Link className="link" to="/dashboard">
							<img className="profile-pic" src={profilePic.url} alt="profile-pic" />
						</Link>
						<div>
							<Link className="link" to="/">
								<button
									onClick={async () => {
										const status = await LogOutUser();
										status ? console.log("logged out") : console.log("cannot log out");
									}}
								>
									Log out
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</motion.div>
	);
}
