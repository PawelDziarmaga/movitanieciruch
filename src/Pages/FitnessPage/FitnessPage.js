import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import FitnessPageBox from "./FitnessPageBox/FitnessPageBox";

import BodyShapeIMG from "../../Image/Ruch/Mini-518px-345px/BodyShape.jpg";
import BPUIMG from "../../Image/Ruch/Mini-518px-345px/BPU.jpg";
import JogaIMG from "../../Image/Ruch/Mini-518px-345px/Joga.jpg";
import PilatesIMG from "../../Image/Ruch/Mini-518px-345px/Pilates.jpg";
import StepIMG from "../../Image/Ruch/Mini-518px-345px/Step.jpg";
import StrechingIMG from "../../Image/Ruch/Mini-518px-345px/Streching.jpg";
import TBCIMG from "../../Image/Ruch/Mini-518px-345px/TBC.jpg";
import CardioIMG from "../../Image/Ruch/Mini-518px-345px/Cardio.jpg";
import PłaskiBrzuchIMG from "../../Image/Ruch/Mini-518px-345px/PłaskiBrzuch.jpg";
import ZdrowyKręgosłupIMG from "../../Image/Ruch/Mini-518px-345px/ZdrowyKręgosłup.jpg";
import BRZUCHSTRETCHIMG from "../../Image/Ruch/Mini-518px-345px/BRZUCHSTRETCH.jpg";
import TABATAIMG from "../../Image/Ruch/Mini-518px-345px/TABATA.jpg";
import ZUMBAIMG from "../../Image/Ruch/Mini-518px-345px/ZUMBA.jpg";
import AEROBIKIMG from "../../Image/Ruch/Mini-518px-345px/AEROBIK.jpg";

import DataFitness from "./DataFitness.json";

function FitnessPage() {
	const [stan, setStan] = useState("Stretching");
	let image = StrechingIMG;

	const { message } = useParams();
	let history = useHistory();

	useEffect(() => {
		if (message === "Ruch") {
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

			history.push("/Ruch/Ruch");
			window.scrollTo({
				top: window.innerHeight / 6,
				left: 0,
				behavior: "smooth",
			});
		}
	});

	switch (stan) {
		case "BodyShape":
			image = BodyShapeIMG;
			break;
		case "BPU":
			image = BPUIMG;
			break;
		case "Joga":
			image = JogaIMG;
			break;
		case "Pilates":
			image = PilatesIMG;
			break;
		case "STEP":
			image = StepIMG;
			break;
		case "Stretching":
			image = StrechingIMG;
			break;
		case "TBC":
			image = TBCIMG;
			break;
		case "Cardio":
			image = CardioIMG;
			break;
		case "PłaskiBrzuch":
			image = PłaskiBrzuchIMG;
			break;
		case "ZdrowyKregoslup":
			image = ZdrowyKręgosłupIMG;
			break;
		case "BrzuchStrech":
			image = BRZUCHSTRETCHIMG;
			break;
		case "TABATA":
			image = TABATAIMG;
			break;
		case "ZUMBA":
			image = ZUMBAIMG;
			break;
		case "AEROBIK":
			image = AEROBIKIMG;
			break;
		default:
			image = StrechingIMG;
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
