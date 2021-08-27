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
	const handleClick = () => {
		const location = {
			pathname: "/Taniec",
		};
		window.scrollTo(0, 0);
		history.push(location);
	};

	return (
		<div id='idDance' className='dance main-element'>
			<h1 className='dance__title'>Taniec</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries,
			</p>
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
