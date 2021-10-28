import Cooperation from "./Cooperation/Cooperation";
import Adres from "./Adres/Adres";
import Kontakt from "./Kontakt/Kontakt";
import Social from "./Social/Social";

function footer() {
	return (
		<div className='footer'>
			<div className='footer__first-floor'>
				<Adres />
				<Kontakt />
				<Social />
			</div>
			<div className='footer__second-floor'>
				<Cooperation />
			</div>
			<div className='footer__third-floor'>
				<h5>©2021 Wszelkie prawa zastrzeżone</h5>
			</div>
		</div>
	);
}

export default footer;
