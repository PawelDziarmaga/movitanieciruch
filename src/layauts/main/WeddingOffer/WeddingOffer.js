import "./WeddingOffer.css";

import ParySlubne from "../../../Image/Dance/ParySlubne.jpg";
import pierwszy from "../../../Image/OfertaSlubna/PierwszyTaniec.png";
import uzytkowy from "../../../Image/OfertaSlubna/TaniecUzytkowy.png";

function WeddingOffer() {
	return (
		<div className='wedding-offer main-element'>
			<h1>Oferta Ślubna</h1>
			<div className='wedding-offer__box'>
				<img scr={ParySlubne} alt='Oferta Ślubna'></img>
				<p>
					Zaplanowaliście już swój najpiękniejszy dzień i
					potrzebujecie wyjątkowego pierwszego tańca? A może chcecie
					udoskonalić swoje umiejętności taneczne przed weselem? Ekipa
					MOVI jak żadna inna przygotuje Was do weselnej zabawy, nawet
					jeśli pozostawiliście to na ostatnią chwilę.{" "}
				</p>
			</div>
			<div className='wedding-offer__box-two'>
				<div>
					<img scr={pierwszy} alt='Pierwszy taniec'></img>
					<h3>Pierwszy taniec</h3>
				</div>
				<div>
					<img scr={uzytkowy} alt='Taniec użytkowy'></img>
					<h3>Taniec użytkowy</h3>
				</div>
			</div>
		</div>
	);
}

export default WeddingOffer;
