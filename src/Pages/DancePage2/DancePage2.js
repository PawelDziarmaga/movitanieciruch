import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import FitnessPageBox from "./DancePage2Box/DancePage2Box";

import BaletIMG from "../../Image/Taniec/Mini-518px-345px/Balet.jpg";
import LatinoIMG from "../../Image/Taniec/Mini-518px-345px/Latino.jpg";
import TaniecTowarzyskiIMG from "../../Image/Taniec/Mini-518px-345px/TaniecTowarzyski.jpg";
import TaniecUzytkowyIMG from "../../Image/Taniec/Mini-518px-345px/TaniecUzytkowy.jpg";
import TaniecWspolczesnyIMG from "../../Image/Taniec/Mini-518px-345px/TaniecWspolczesny.jpg";
import TechnikiTancaKlasycznegoIMG from "../../Image/Taniec/Mini-518px-345px/TechnikiTancaKlasycznego.jpg";
import ZajeciaRuchDlaDzieciIMG from "../../Image/Taniec/Mini-518px-345px/ZajeciaRuchDlaDzieci.jpg";
import HipHopIMG from "../../Image/Taniec/Mini-518px-345px/HipHop.jpg";
import BachataLadyStyleIMG from "../../Image/Taniec/Mini-518px-345px/BachataLadyStyle.jpg";
import SalsaCubanaIMG from "../../Image/Taniec/Mini-518px-345px/SalsaCubana.jpg";
import RuedaDeCasinoIMG from "../../Image/Taniec/Mini-518px-345px/RuedaDeCasino.jpg";

import DataFitness from "./DancePage2.json";

function FitnessPage() {
	const [stan, setStan] = useState("TaniecTowarzyski");
	let image = TaniecTowarzyskiIMG;

	let history = useHistory();
	const { message } = useParams();

	useEffect(() => {
		if (message === "Taniec") {
			console.log("false");
		} else {
			console.log("true");

			const allElements = document.querySelectorAll(`.Fitness div`);
			console.log(allElements);

			const chosenElement = document.querySelectorAll(
				`.Fitness .${message}`
			);

			for (let i = 0; i < allElements.length; i++) {
				allElements[i].classList.remove("active");
				allElements[i].classList.remove("active-color");
			}

			chosenElement[0].classList.add("active-color");
			chosenElement[2].classList.add("active");

			history.push("/Taniec/Taniec");
			window.scrollTo({
				top: window.innerHeight / 6,
				left: 0,
				behavior: "smooth",
			});
		}
	});

	switch (stan) {
		case "TaniecTowarzyski":
			image = TaniecTowarzyskiIMG;
			break;
		case "TaniecU??ytkowy":
			image = TaniecUzytkowyIMG;
			break;
		case "Latino":
			image = LatinoIMG;
			break;
		case "Balet":
			image = BaletIMG;
			break;
		case "TechnikiTa??caKlasycznego":
			image = TechnikiTancaKlasycznegoIMG;
			break;
		case "TaniecWsp????czesny":
			image = TaniecWspolczesnyIMG;
			break;
		case "Zaj??ciaRuchoweDlaDzieci":
			image = ZajeciaRuchDlaDzieciIMG;
			break;
		case "HIPHOP":
			image = HipHopIMG;
			break;
		case "BachataLadyStyle":
			image = BachataLadyStyleIMG;
			break;
		case "SalsaCubana":
			image = SalsaCubanaIMG;
			break;
		case "RuedeDeCasino":
			image = RuedaDeCasinoIMG;
			break;
		default:
			image = TaniecTowarzyskiIMG;
			break;
	}
	return (
		<div className='fitness-page'>
			<FitnessPageBox
				image={image}
				stan={stan}
				setStan={setStan}
				title='Fitness'
				img={image}
				txt={DataFitness}
			/>
		</div>
	);
}

export default FitnessPage;
