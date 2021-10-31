import { useHistory } from "react-router";

import ContainerDance from "./ContainerDance/ContainerDance";

import BaletIMG from "../../../Image/Taniec/Mini-518px-345px/Balet.jpg";
import LatinoIMG from "../../../Image/Taniec/Mini-518px-345px/Latino.jpg";
import TaniecTowarzyskiIMG from "../../../Image/Taniec/Mini-518px-345px/TaniecTowarzyski.jpg";
import TaniecUzytkowyIMG from "../../../Image/Taniec/Mini-518px-345px/TaniecUzytkowy.jpg";
import TaniecWspolczesnyIMG from "../../../Image/Taniec/Mini-518px-345px/TaniecWspolczesny.jpg";
import TechnikiTancaKlasycznegoIMG from "../../../Image/Taniec/Mini-518px-345px/TechnikiTancaKlasycznego.jpg";
import ZajeciaRuchDlaDzieciIMG from "../../../Image/Taniec/Mini-518px-345px/ZajeciaRuchDlaDzieci.jpg";

function Dance() {
	const history = useHistory();
	const handleClick = (e) => {
		let location;
		if (e.target.classList[1] === "toGraphic") {
			location = {
				pathname: `/Grafik`,
			};
		} else {
			location = {
				pathname: `/Taniec/${e.target.classList[1]}`,
			};
		}

		history.push(location);
	};
	const elements = [
		["Balet", BaletIMG, "Balet"],
		["Latino", LatinoIMG, "Latino"],
		["Taniec Towarzyski", TaniecTowarzyskiIMG, "TaniecTowarzyski"],
		["Taniec użytkowy", TaniecUzytkowyIMG, "TaniecUżytkowy"],
		["Taniec Współczesny", TaniecWspolczesnyIMG, "TaniecWspółczesny"],
		[
			"Techniki Tańca Klasycznego",
			TechnikiTancaKlasycznegoIMG,
			"TechnikiTańcaKlasycznego",
		],
		[
			"Zajęcia Ruchowe Dla dzieci",
			ZajeciaRuchDlaDzieciIMG,
			"ZajęciaRuchoweDlaDzieci",
		],
		["Sprawdz grafik!", TechnikiTancaKlasycznegoIMG, "toGraphic"],
	];

	const createElements = elements.map((element) => (
		<ContainerDance
			key={element[0]}
			click={handleClick}
			name={element[0]}
			img={element[1]}
			className={element[2]}
		/>
	));

	return (
		<div id='idDance' className='dance main-element'>
			<div className='dance__types'>{createElements}</div>
		</div>
	);
}

export default Dance;
