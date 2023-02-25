import "./Footer.css";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-container">
			<p>&copy; Copyright {currentYear}</p>
			<p>Made with 🖤 by Moinak</p>
			<p>
				<a href="https://www.flaticon.com/free-icons/question" title="question icons">
					Question icons created by Dewi Sari - Flaticon
				</a>
			</p>
		</div>
	);
}
