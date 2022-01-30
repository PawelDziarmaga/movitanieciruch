import { useHistory } from "react-router";

import ContainerDance from "./ContainerDance/ContainerDance";

import BaletIMG from "../../../Image/Taniec/Mini-518px-345px/Balet.jpg";
import LatinoIMG from "../../../Image/Taniec/Mini-518px-345px/Latino.jpg";
import TaniecTowarzyskiIMG from "../../../Image/Taniec/Mini-518px-345px/TaniecTowarzyski.jpg";
import TaniecUzytkowyIMG from "../../../Image/Taniec/Mini-518px-345px/TaniecUzytkowy.jpg";
import TaniecWspolczesnyIMG from "../../../Image/Taniec/Mini-518px-345px/TaniecWspolczesny.jpg";
import TechnikiTancaKlasycznegoIMG from "../../../Image/Taniec/Mini-518px-345px/TechnikiTancaKlasycznego.jpg";
import ZajeciaRuchDlaDzieciIMG from "../../../Image/Taniec/Mini-518px-345px/ZajeciaRuchDlaDzieci.jpg";
import HipHopIMG from "../../../Image/Taniec/Mini-518px-345px/HipHop.jpg";
import BachataLadyStyleIMG from "../../../Image/Taniec/Mini-518px-345px/BachataLadyStyle.jpg";
import SalsaCubanaIMG from "../../../Image/Taniec/Mini-518px-345px/SalsaCubana.jpg";
import RuedaDeCasinoIMG from "../../../Image/Taniec/Mini-518px-345px/RuedaDeCasino.jpg";
import SprawdzGrafikIMG from "../../../Image/Taniec/Mini-518px-345px/SprawdzGrafik.jpg";

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

		["MOVI KIDS", ZajeciaRuchDlaDzieciIMG, "ZajęciaRuchoweDlaDzieci"],
		["Hip HOP", HipHopIMG, "HIPHOP"],
		["Bachata Lady StyleS", BachataLadyStyleIMG, "BachataLadyStyle"],
		["Salsa Cubana", SalsaCubanaIMG, "SalsaCubana"],
		["Rueda De Casino", RuedaDeCasinoIMG, "RuedeDeCasino"],
		[
			"Techniki Tańca Klasycznego",
			TechnikiTancaKlasycznegoIMG,
			"TechnikiTańcaKlasycznego",
		],
		["Sprawdz grafik!", SprawdzGrafikIMG, "toGraphic"],
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
