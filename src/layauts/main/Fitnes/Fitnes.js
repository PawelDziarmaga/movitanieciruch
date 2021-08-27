import { useHistory } from "react-router";

import FitnesElements from "./FitnesElements/FitnesElements";

import BoxOne from "./BoxOne/BoxOne";

import kcal from "../../../Image/Fitness/kcal.png";
import idea from "../../../Image/Fitness/idea.png";
import muscles from "../../../Image/Fitness/muscles.png";
import power from "../../../Image/Fitness/power.png";
import smile from "../../../Image/Fitness/smile.png";
import stress from "../../../Image/Fitness/stress.png";
import fitnessImg from "../../../Image/Fitness/fitness.jpg";
function Fitnes() {
	const history = useHistory();
	const handleClick = () => {
		const location = {
			pathname: "/Fitness",
		};
		window.scrollTo(0, 0);
		history.push(location);
	};
	return (
		<div id='idFitnes' className='fitness main-element'>
			<h1>Fitness</h1>
			<BoxOne click={handleClick} fitness={fitnessImg} />
			<div className='fitness__col'>
				<div className='fitness__col1'>
					<FitnesElements
						click={handleClick}
						img={kcal}
						text='Spalanie Kalori'
					/>
					<FitnesElements
						click={handleClick}
						img={smile}
						text='Endorfiny'
					/>
					<FitnesElements
						click={handleClick}
						img={stress}
						text='Redukcja Stresu'
					/>
				</div>
				<div className='fitness__col2'>
					<FitnesElements
						click={handleClick}
						img={power}
						text='Przypływ Energii'
					/>
					<FitnesElements
						click={handleClick}
						img={idea}
						text='Poprawa Koncentracji'
					/>
					<FitnesElements
						click={handleClick}
						img={muscles}
						text='Lepsza Sylwetka'
					/>
				</div>
			</div>
		</div>
	);
}

export default Fitnes;
