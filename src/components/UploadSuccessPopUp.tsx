import "./Success-pop-up.css";

interface ContentType {
	contentType: "post" | "comment";
}

export default function UploadSuccessPopUp({ contentType }: ContentType) {
	return (
		<div className="success-pop-up">
			{contentType === "post" ? (
				<p>shh!!🤫 Your secret has been posted...😉</p>
			) : (
				<p>Comment posted successfully!</p>
			)}
		</div>
	);
}
