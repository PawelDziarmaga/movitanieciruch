import { useHistory } from "react-router";

import ContainerDance from "./ContainerDance/ContainerDance";

import BodyShapeIMG from "../../../Image/Ruch/BodyShape.jpg";
import BPUIMG from "../../../Image/Ruch/BPU.jpg";
import JogaIMG from "../../../Image/Ruch/Joga.jpg";
import PilatesIMG from "../../../Image/Ruch/Pilates.jpg";
import StepIMG from "../../../Image/Ruch/Step.jpg";
import StrechingIMG from "../../../Image/Ruch/Streching.jpg";
import TBCIMG from "../../../Image/Ruch/TBC.jpg";

function Dance() {
	const elements = [
		["Body Shape", BodyShapeIMG],
		["BPU", BPUIMG],
		["Joga", JogaIMG],
		["Pilates", PilatesIMG],
		["Step", StepIMG],
		["Streching", StrechingIMG],
		["TBC", TBCIMG],
		["Zapisz się!", TBCIMG],
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
