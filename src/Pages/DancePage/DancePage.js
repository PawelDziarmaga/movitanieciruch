import DancePageBox from "./DancePageBox/DancePageBox";

import KidsPisture from "../../Image/Dance/Dzieci.jpg";
import YoungPisture from "../../Image/Dance/Mlodziez.jpg";
import AdultsPisture from "../../Image/Dance/Dorosli.jpg";
import SeniorsPisture from "../../Image/Dance/Seniorzy.jpg";
import CouplesPisture from "../../Image/Dance/Pary.jpg";
import SoloPisture from "../../Image/Dance/Solo.jpg";

import DataDzieciMlodziez from "./DataDzieciMlodziez.json";

function DancePage() {
	return (
		<div className='dance-page'>
			<h1 className='dance-page__title'>Taniec</h1>
			<DancePageBox
				title='Dzieci'
				img={KidsPisture}
				txt={DataDzieciMlodziez}
			/>
			<DancePageBox
				title='Młodzież'
				img={YoungPisture}
				txt={DataDzieciMlodziez}
			/>
			<DancePageBox
				title='Dorośli'
				img={AdultsPisture}
				txt={DataDzieciMlodziez}
			/>
			<DancePageBox
				title='Seniorzy'
				img={SeniorsPisture}
				txt={DataDzieciMlodziez}
			/>
			<DancePageBox
				title='Pary'
				img={CouplesPisture}
				txt={DataDzieciMlodziez}
			/>
			<DancePageBox
				title='Solo'
				img={SoloPisture}
				txt={DataDzieciMlodziez}
			/>
		</div>
	);
}

export default DancePage;
