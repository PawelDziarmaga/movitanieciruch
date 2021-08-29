import DancePageBox from "./DancePageBox/DancePageBox";

import KidsPisture from "../../Image/Dance/Dzieci.jpg";
import YoungPisture from "../../Image/Dance/Mlodziez.jpg";
import AdultsPisture from "../../Image/Dance/Dorosli.jpg";
import SeniorsPisture from "../../Image/Dance/Seniorzy.jpg";
import CouplesPisture from "../../Image/Dance/Pary.jpg";
import SoloPisture from "../../Image/Dance/Solo.jpg";

import DataDzieci from "./DataDzieci.json";
import DataMlodziez from "./DataMlodziez.json";
import DataDorosli from "./DataDorosli.json";
import DataSeniorzy from "./DataSeniorzy.json";
import DataPary from "./DataPary.json";
import DataSolo from "./DataSolo.json";

function FitnessPage() {
	return (
		<div className='dance-page'>
			<h1 className='dance-page__title'>Taniec</h1>
			<DancePageBox title='Dzieci' img={KidsPisture} txt={DataDzieci} />
			<DancePageBox
				title='Młodzież'
				img={YoungPisture}
				txt={DataMlodziez}
			/>
			<DancePageBox
				title='Dorośli'
				img={AdultsPisture}
				txt={DataDorosli}
			/>
			<DancePageBox
				title='Seniorzy'
				img={SeniorsPisture}
				txt={DataSeniorzy}
			/>
			<DancePageBox title='Pary' img={CouplesPisture} txt={DataPary} />
			<DancePageBox title='Solo' img={SoloPisture} txt={DataSolo} />
		</div>
	);
}

export default FitnessPage;
