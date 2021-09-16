import aniaPictures from "../../../Image/Instructors/Ania-K.jpg";
import iwonaPictures from "../../../Image/Instructors/Iwona-L.jpg";
import kamilPictures from "../../../Image/Instructors/Kamil-S.jpg";
import marekPictures from "../../../Image/Instructors/Marek-W.jpg";

function Instructors() {
	return (
		<div id='idInstructors' className='instructors main-element'>
			<div className='instructors__container'>
				<div className='instructors__box'>
					<img
						src={aniaPictures}
						alt='Ania'
						className='instructors__picture'></img>
					<h2 className='instructors__name'>Ania</h2>
					<h3 className='instructors__possition'>Instruktor</h3>
				</div>
				<div className='instructors__box'>
					<img
						src={iwonaPictures}
						alt='Iwona'
						className='instructors__picture'></img>
					<h2 className='instructors__name'>Ania</h2>
					<h3 className='instructors__possition'>Instruktor</h3>
				</div>
				<div className='instructors__box'>
					<img
						src={kamilPictures}
						alt='Kamil'
						className='instructors__picture'></img>
					<h2 className='instructors__name'>Ania</h2>
					<h3 className='instructors__possition'>Instruktor</h3>
				</div>
				<div className='instructors__box'>
					<img
						src={marekPictures}
						alt='Marek'
						className='instructors__picture'></img>
					<h2 className='instructors__name'>Ania</h2>
					<h3 className='instructors__possition'>Instruktor</h3>
				</div>
			</div>
		</div>
	);
}

export default Instructors;
