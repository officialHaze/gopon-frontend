import { Link } from "react-router-dom";
import "./SecretCards.css";

interface Props {
	alias: string;
	secret: string;
	aliasImg: string;
	href: string;
	comments: number;
}

export default function SecretCards({ alias, secret, aliasImg, href, comments }: Props) {
	const truncatedSecret = secret.substring(0, 100) + "...";

	return (
		<Link to={href} className="card-container link">
			<div className="alias-info">
				<img className="alias-img" src={aliasImg} alt="alias" />
				<div className="post-alias-container">
					<h3>{alias}</h3>
					<p>{truncatedSecret}</p>
				</div>
			</div>
			<div className="comments-info">
				<p>
					<em>Comments({comments})</em>
				</p>
			</div>
		</Link>
	);
}
