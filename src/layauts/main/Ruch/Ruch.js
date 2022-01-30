import { useHistory } from "react-router";

import ContainerDance from "./ContainerRuch/ContainerRuch";

import BodyShapeIMG from "../../../Image/Ruch/Mini-518px-345px/BodyShape.jpg";
import BPUIMG from "../../../Image/Ruch/Mini-518px-345px/BPU.jpg";
import JogaIMG from "../../../Image/Ruch/Mini-518px-345px/Joga.jpg";
import PilatesIMG from "../../../Image/Ruch/Mini-518px-345px/Pilates.jpg";
import StepIMG from "../../../Image/Ruch/Mini-518px-345px/Step.jpg";
import StrechingIMG from "../../../Image/Ruch/Mini-518px-345px/Streching.jpg";
import TBCIMG from "../../../Image/Ruch/Mini-518px-345px/TBC.jpg";
import CardioIMG from "../../../Image/Ruch/Mini-518px-345px/Cardio.jpg";
import PłaskiBrzuchIMG from "../../../Image/Ruch/Mini-518px-345px/PłaskiBrzuch.jpg";
import ZdrowyKręgosłupIMG from "../../../Image/Ruch/Mini-518px-345px/ZdrowyKręgosłup.jpg";
import BRZUCHSTRETCHIMG from "../../../Image/Ruch/Mini-518px-345px/BRZUCHSTRETCH.jpg";
import TABATAIMG from "../../../Image/Ruch/Mini-518px-345px/TABATA.jpg";
import ZUMBAIMG from "../../../Image/Ruch/Mini-518px-345px/ZUMBA.jpg";
import AEROBIKIMG from "../../../Image/Ruch/Mini-518px-345px/AEROBIK.jpg";
import ZapiszSie from "../../../Image/Ruch/Mini-518px-345px//ZapiszSie.jpg";

function Ruch() {
	const history = useHistory();
	const handleClick = (e) => {
		let location;
		if (e.target.classList[1] === "toGraphic") {
			location = {
				pathname: `/Grafik`,
			};
		} else {
			location = {
				pathname: `/Ruch/${e.target.classList[1]}`,
			};
		}
		history.push(location);
	};
	const elements = [
		["Body Shape", BodyShapeIMG, "BodyShape"],
		["BPU", BPUIMG, "BPU"],
		["Joga", JogaIMG, "Joga"],
		["Pilates", PilatesIMG, "Pilates"],
		["Step", StepIMG, "STEP"],
		["Streching", StrechingIMG, "Stretching"],
		["TBC", TBCIMG, "TBC"],
		["Cardio", CardioIMG, "Cardio"],
		["Płaski Brzuch", PłaskiBrzuchIMG, "PłaskiBrzuch"],
		["Zdrowy Kręgosłup", ZdrowyKręgosłupIMG, "ZdrowyKregoslup"],
		["BRZUCH & STRETCH", BRZUCHSTRETCHIMG, "BrzuchStrech"],
		["TABATA", TABATAIMG, "TABATA"],
		["ZUMBA", ZUMBAIMG, "ZUMBA"],
		["AEROBIK", AEROBIKIMG, "AEROBIK"],
		["Zapisz się!", ZapiszSie, "toGraphic"],
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
		<div id='idRuch' className='ruch main-element'>
			<div className='ruch__types'>{createElements}</div>
		</div>
	);
}

export default Ruch;
