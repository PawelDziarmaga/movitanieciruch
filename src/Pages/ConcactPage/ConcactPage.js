import Adress from "./Adress/Adress";
import Map from "./Map/Map";
import SocialMedia from "./SocialMedia/SocialMedia";

function ConcactPage() {
	window.scrollTo(0, 0);
	return (
		<div className='concact-page'>
			<h1 className='concact-page__title'>Kontakt</h1>
			<Adress />
			<Map />
			<SocialMedia />
		</div>
	);
}

export default ConcactPage;
