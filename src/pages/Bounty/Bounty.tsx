import Card from "../../components/Card";
import Carousel from "../../components/Carousel/Carousel";

import "./Bounty.css";

const Bounty = () => {
	return (
		<div className="bounty-page">
			<h1>Je suis la page Bounty Hunters</h1>
			<Carousel />
			<Card />
		</div>
	);
};

export default Bounty;
