import { useHistory } from "react-router-dom";

import DataActivities from "./DataActivities.json";
import TaniecImg from "../../Image/Zajecia/Mini-518px-345px/Taniec.jpg";
import RuchImg from "../../Image/Zajecia/Mini-518px-345px/Ruch.jpg";
function ActivitiesPage() {
	window.scrollTo({
		top: window.innerHeight / 6,
		left: 0,
		behavior: "smooth",
	});

	let history = useHistory();

	function handleClick(e) {
		if (e.target.classList[0] === "taniec") {
			history.push("/Taniec/Taniec");
		} else if (e.target.classList[0] === "ruch") {
			history.push("/Ruch/Ruch");
		}
	}

	return (
		<div className='activitiesPage'>
			<div
				onClick={handleClick}
				className='taniec activitiesPage__container activitiesPage__taniec'>
				<h2 className='taniec activitiesPage__title'>
					{DataActivities.taniec.nazwa}
				</h2>
				<div className='taniec activitiesPage__box'>
					<img className='taniec' src={TaniecImg} alt='Taniec'></img>
					<p className='taniec'>
						{DataActivities.taniec.opis}{" "}
						<span className='taniec'>Więcej...</span>
					</p>
				</div>
			</div>
			<div
				onClick={handleClick}
				className='ruch activitiesPage__container activitiesPage__ruch'>
				<h2 className='ruch activitiesPage__title'>
					{DataActivities.RUCH.nazwa}
				</h2>
				<div className='ruch activitiesPage__box'>
					<p className='ruch'>
						{DataActivities.RUCH.opis}
						<span className='ruch'>Więcej...</span>
					</p>
					<img className='ruch' src={RuchImg} alt='Taniec'></img>
				</div>
			</div>
		</div>
	);
}

export default ActivitiesPage;
