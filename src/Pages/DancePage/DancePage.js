import "./DancePage.css";

import ContainerDanceText from "./ContainerDanceText/ContainerDanceText";
import ContainerDance from "./ContainerDance/ContainerDance";

import KidsPisture from "../../Image/Dance/Dzieci.jpg";
import YoungPisture from "../../Image/Dance/Mlodziez.jpg";
import AdultsPisture from "../../Image/Dance/Dorosli.jpg";
import SeniorsPisture from "../../Image/Dance/Seniorzy.jpg";
import CouplesPisture from "../../Image/Dance/Pary.jpg";
import SoloPisture from "../../Image/Dance/Solo.jpg";

function DancePage() {
	return (
		<div className='dance-page'>
			<h1 className='dance__title'>Taniec</h1>
			<ContainerDanceText />
			<div className='dance__types'>
				<ContainerDance name='Dzieci' img={KidsPisture} />
				<ContainerDance name='Młodzież' img={YoungPisture} />
				<ContainerDance name='Dorośli' img={AdultsPisture} />
				<ContainerDance name='Seniorzy' img={SeniorsPisture} />
				<ContainerDance name='Pary' img={CouplesPisture} />
				<ContainerDance name='Solo' img={SoloPisture} />
			</div>
			<p>
				MOVI jest idealnym miejscem dla każdego, kto chce poznać różne
				rodzaje tańca, ruchu, kto chce udoskonalić już posiadane
				umiejętności, kto chce miło spędzić wolny czas. Odnajdzie się
				tutaj początkujący i zawodowiec. Wszystkiego Was nauczymy,
				pokażemy.
			</p>
		</div>
	);
}

export default DancePage;
