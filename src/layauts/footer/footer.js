import Adress from "./Adress/Adress";
import Map from "./Map/Map";
import SocialMedia from "./SocialMedia/SocialMedia";
import Cooperation from "./Cooperation/Cooperation";

function footer() {
	return (
		<div className='footer'>
			<Adress />
			<div className='footer__box'>
				<Map />
				<SocialMedia />
			</div>
			<Cooperation />
			<div className='footer__third-floor'>
				<h5>©2021 Wszelkie prawa zastrzeżone</h5>
			</div>
		</div>
	);
}

export default footer;
