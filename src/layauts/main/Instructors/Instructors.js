import "./Instructors.css";
import aniaPictures from "../../../Image/Instructors/Ania-K.jpg";
import iwonaPictures from "../../../Image/Instructors/Iwona-L.jpg";
import kamilPictures from "../../../Image/Instructors/Kamil-S.jpg";
import marekPictures from "../../../Image/Instructors/Marek-W.jpg";
import martaPictures from "../../../Image/Instructors/Marta-W.jpg";
import michalPictures from "../../../Image/Instructors/Michal-J.jpg";
import patrykPictures from "../../../Image/Instructors/Patryk-Z.jpg";
import zosiaPictures from "../../../Image/Instructors/Zosia-H.jpg";
function Instructors() {
	return (
		<div className=' main-element'>
			<h1>Nasi instruktorzy:</h1>
			<div className='instructors'>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Ania</h2>
					<img
						src={aniaPictures}
						alt='Ania'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Iwona</h2>
					<img
						src={iwonaPictures}
						alt='Iwona'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Kamil</h2>
					<img
						src={kamilPictures}
						alt='Kamil'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Marek</h2>
					<img
						src={marekPictures}
						alt='Marek'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Marta</h2>
					<img
						src={martaPictures}
						alt='Marta'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Michał</h2>
					<img
						src={michalPictures}
						alt='Michał'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Patryk</h2>
					<img
						src={patrykPictures}
						alt='Patryk'
						className='instructors__picture'></img>
				</div>
				<div className='instructors__box'>
					<h2 className='instructors__name'>Zosia</h2>
					<img
						src={zosiaPictures}
						alt='Zosia'
						className='instructors__picture'></img>
				</div>
			</div>
		</div>
	);
}

export default Instructors;
