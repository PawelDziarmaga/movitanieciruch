import { useHistory } from "react-router";

import ContainerDance from "./ContainerDance/ContainerDance";

import BaletIMG from "../../../Image/Taniec/Balet.jpg";
import LatinoIMG from "../../../Image/Taniec/Latino.jpg";
import TaniecTowarzyskiIMG from "../../../Image/Taniec/TaniecTowarzyski.jpg";
import TaniecUzytkowyIMG from "../../../Image/Taniec/TaniecUzytkowy.jpg";
import TaniecWspolczesnyIMG from "../../../Image/Taniec/TaniecWspolczesny.jpg";
import TechnikiTancaKlasycznegoIMG from "../../../Image/Taniec/TechnikiTancaKlasycznego.jpg";
import ZajeciaRuchDlaDzieciIMG from "../../../Image/Taniec/ZajeciaRuchDlaDzieci.jpg";

function Dance() {
	const elements = [
		["Balet", BaletIMG],
		["Latino", LatinoIMG],
		["Taniec Towarzyski", TaniecTowarzyskiIMG],
		["Taniec użytkowy", TaniecUzytkowyIMG],
		["Taniec Współczesny", TaniecWspolczesnyIMG],
		["Techniki Tańca Klasycznego", TechnikiTancaKlasycznegoIMG],
		["Zajęcia Ruchowe Dla dzieci", ZajeciaRuchDlaDzieciIMG],
		["Sprawdz grafik!", TechnikiTancaKlasycznegoIMG],
	];
	const handleClick = (e) => {
		const location = {
			pathname: "/Taniec",
		};
		history.push(location);
	};
	const createElements = elements.map((element) => (
		<ContainerDance
			click={handleClick}
			name={element[0]}
			img={element[1]}
		/>
	));
	const history = useHistory();

	return (
		<div id='idDance' className='dance main-element'>
			<div className='dance__types'>{createElements}</div>
		</div>
	);
}

export default Dance;
