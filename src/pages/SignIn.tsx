import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "./Sign-In.css";
import Footer from "../components/Footer";

export default function SignIn() {
	return (
		<>
			<Navbar />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="sign-in-page"
			>
				<div className="sign-in-btn-container">
					<div className="sign-in-header">
						<h2>Sign in with our provider:</h2>
					</div>
					<div className="google-sign-in-container">
						<div className="google-sign-in">
							<FcGoogle className="google-logo" />
							<Link
								className="link sign-in-link"
								to="https://gopon-server.onrender.com/auth/google"
							>
								<h4>Sign in with Google</h4>
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
			<Footer />
		</>
	);
}
