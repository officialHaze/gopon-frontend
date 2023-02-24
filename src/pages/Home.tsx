import Navbar from "../components/Navbar";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div>
			<Navbar />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				style={{ marginTop: "2rem", fontFamily: "'Poppins', sans-serif" }}
			>
				<div className="page-heading">
					<h1>Gopon</h1>
				</div>
				<div className="sub-heading">
					<p>
						<em>Don't hide your secrets anymore! Share them with the world!</em>
					</p>
				</div>
				<div className="documentation">
					<p>
						<span style={{ fontWeight: "800" }}>Gopon</span> is a fun place to share your secrets
						with the world. Often you come across situations where you want to share your immediate
						thoughts or feelings with someone but you become paranoid that:- the other person might
						judge you, maybe you are not comfortable disclosing your identity while sharing your
						thougths & secrets or there could be other reasons as well.
					</p>
					<br />
					<p>
						In <span style={{ fontWeight: "800" }}>Gopon</span>, well, you don't have to worry about
						such <span style={{ fontWeight: "800" }}>"reasons"</span>. Here, you can share you
						secrets, your feelings, maybe you can start a thread or conversation and you can do all
						this by staying <span style={{ fontWeight: "800" }}>anonymous</span>. The user have to
						create an <span style={{ fontWeight: "800" }}>alias</span> which can be completely
						fictitious and the alias will be his/her identity.
					</p>
					<br />
					<p>
						You can skim through all the secrets that other users have shared and if any of the
						topics interest you you can even <span style={{ fontWeight: "800" }}>comment</span> on
						them. Accordingly, others can comment on your secret posts if you have shared any in{" "}
						<span style={{ fontWeight: "800" }}>Gopon</span>. This makes it very interesting because
						often you might find out that there are more number of people than you anticipated who
						feels the same way as you do.
					</p>
					<br />
					<p>
						<span style={{ fontWeight: "800" }}>
							So, don't keep all those secrets bundled up inside. Share them anonymously with the
							world!
						</span>{" "}
						😉
					</p>
					<br />
					<p style={{ fontSize: "0.85rem", textAlign: "center" }}>
						<em>
							(Ps:- Posts favoring criminal activities can be traced back to the IP source and the
							original account from where the post was made. So, please keep the site clean and fun)
						</em>
					</p>
				</div>
			</motion.div>
		</div>
	);
}
