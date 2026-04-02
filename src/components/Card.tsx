import "./Card.css";
import { useLocation } from "react-router";

function Card() {
	const location = useLocation();
	const userId = (location.state as { userId?: number })?.userId || 0;

	return (
		<section className="card-section">
			<div className="card-container">
				<div className="container-img-info">
					<div className="card-div-img">
						<img
							src={`https://picsum.photos/200?random=`}
							alt={`User ${userId}`}
						/>
					</div>
					<div className="card-div-info" id={`user-${userId}`}>
						<p>User ID: {userId}</p>
						<p>Name: {userId === 1 ? "Luke Skywalker" : "Unknown"}</p>
						<p>Role: Jedi</p>
						<p>Status: Active</p>
					</div>
				</div>
				<div className="card-div-description">
					<p>This is a card description for user {userId}.</p>
				</div>
			</div>
		</section>
	);
}

export default Card;
