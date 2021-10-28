import { useHistory } from "react-router";

import ContainerDance from "./ContainerDance/ContainerDance";

import BodyShapeIMG from "../../../Image/Ruch/Mini-518px-345px/BodyShape.jpg";
import BPUIMG from "../../../Image/Ruch/Mini-518px-345px/BPU.jpg";
import JogaIMG from "../../../Image/Ruch/Mini-518px-345px/Joga.jpg";
import PilatesIMG from "../../../Image/Ruch/Mini-518px-345px/Pilates.jpg";
import StepIMG from "../../../Image/Ruch/Mini-518px-345px/Step.jpg";
import StrechingIMG from "../../../Image/Ruch/Mini-518px-345px/Streching.jpg";
import TBCIMG from "../../../Image/Ruch/Mini-518px-345px/TBC.jpg";

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
