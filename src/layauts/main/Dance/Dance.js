import { useHistory } from "react-router";

import ContainerDance from "./ContainerDance/ContainerDance";

import KidsPisture from "../../../Image/Dance/Dzieci.jpg";
import YoungPisture from "../../../Image/Dance/Mlodziez.jpg";
import AdultsPisture from "../../../Image/Dance/Dorosli.jpg";
import SeniorsPisture from "../../../Image/Dance/Seniorzy.jpg";
import CouplesPisture from "../../../Image/Dance/Pary.jpg";
import SoloPisture from "../../../Image/Dance/Solo.jpg";

function Dance() {
	const history = useHistory();
	const handleClick = (e) => {
		const location = {
			pathname: "/Taniec",
		};
		history.push(location);
	};

	return (
		<div id='idDance' className='dance main-element'>
			<div className='dance__types'>
				<ContainerDance
					click={handleClick}
					name='Dzieci'
					img={KidsPisture}
				/>
				<ContainerDance
					click={handleClick}
					name='Młodzież'
					img={YoungPisture}
				/>
				<ContainerDance
					click={handleClick}
					name='Dorośli'
					img={AdultsPisture}
				/>
				<ContainerDance
					click={handleClick}
					name='Seniorzy'
					img={SeniorsPisture}
				/>
				<ContainerDance
					click={handleClick}
					name='Pary'
					img={CouplesPisture}
				/>
				<ContainerDance
					click={handleClick}
					name='Solo'
					img={SoloPisture}
				/>
			</div>
		</div>
	);
}

export default Dance;
