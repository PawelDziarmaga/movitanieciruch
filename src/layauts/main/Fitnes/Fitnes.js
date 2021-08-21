import "./Fitnes.css";

import FitnesElements from "./FitnesElements/FitnesElements";

import kcal from "../../../Image/Fitness/kcal.png";
import idea from "../../../Image/Fitness/idea.png";
import muscles from "../../../Image/Fitness/muscles.png";
import power from "../../../Image/Fitness/power.png";
import smile from "../../../Image/Fitness/smile.png";
import stress from "../../../Image/Fitness/stress.png";

function Fitnes() {
	return (
		<div id='idFitnes' className='fitnes main-element'>
			<h1>Fitness</h1>
			<p>
				Pozwala kompleksowo zadbać o całe nasze ciało! O jego piękny
				wygląd, o sprawność, wytrzymałość. To także rodzaj stylu życia
				wspierający zdrowe odżywianie, dobre nawyki, wymagający
				aktywności, umiejętności zachowania odpowiednich proporcji
				pomiędzy pracą i wypoczynkiem.{" "}
			</p>
			<div className='fitnes__col'>
				<div className='fitnes__col1'>
					<FitnesElements img={kcal} text='Spalanie Kalori' />
					<FitnesElements img={smile} text='Endorfiny' />
					<FitnesElements img={stress} text='Redukcja Stresu' />
				</div>
				<div className='fitnes__col2'>
					<FitnesElements img={power} text='Przypływ Energii' />
					<FitnesElements img={idea} text='Poprawa Koncentracji' />
					<FitnesElements img={muscles} text='Lepsza Sylwetka' />
				</div>
			</div>
		</div>
	);
}

export default Fitnes;
