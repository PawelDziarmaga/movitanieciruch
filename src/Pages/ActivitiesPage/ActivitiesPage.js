import DataActivities from "./DataActivities.json";
import TaniecImg from "../../Image/SpecialOffer/party.jpg";
import RuchImg from "../../Image/Fitness/fitness.jpg";
function ActivitiesPage() {
	window.scrollTo(0, 0);
	return (
		<div className='activitiesPage'>
			<div className='activitiesPage__container activitiesPage__taniec'>
				<h2 className='activitiesPage__title'>
					{DataActivities.taniec.nazwa}
				</h2>
				<div className='activitiesPage__box'>
					<img src={TaniecImg} alt='Taniec'></img>
					<p>{DataActivities.taniec.opis}</p>
				</div>
			</div>
			<div className='activitiesPage__container activitiesPage__ruch'>
				<h2 className='activitiesPage__title'>
					{DataActivities.RUCH.nazwa}
				</h2>
				<div className='activitiesPage__box'>
					<p>{DataActivities.RUCH.opis}</p>
					<img src={RuchImg} alt='Taniec'></img>
				</div>
			</div>
		</div>
	);
}

export default ActivitiesPage;
