import "./Comments.css";

interface Props {
	id: number;
	alias: string;
	aliasImg: string;
	comment: string;
}

export default function Comments({ id, alias, aliasImg, comment }: Props) {
	return (
		<div className="comment-container">
			<div className="comment-header">
				<div className="alias-img-header-container">
					<img className="comment-alias-img" src={aliasImg} alt="alias" />
				</div>

				<div>
					<h3>{alias}</h3>
				</div>
			</div>
			<div className="comment-body">
				<p>{comment}</p>
			</div>
		</div>
	);
}
