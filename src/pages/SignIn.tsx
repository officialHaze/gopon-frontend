import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Sign-In.css";

export default function SignIn() {
	return (
		<>
			<Navbar />
			<div className="sign-in-page">
				<div className="sign-in-btn-container">
					<div className="sign-in-header">
						<h2>Sign in with our provider:</h2>
					</div>
					<div className="google-sign-in-container">
						<div className="google-sign-in">
							<FcGoogle className="google-logo" />
							<Link className="link sign-in-link" to="http://localhost:5000/auth/google">
								<h4>Sign in with Google</h4>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
