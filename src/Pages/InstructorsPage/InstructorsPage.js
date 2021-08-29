import InstructorsPageBox from "./InstructorsPageBox/InstructorsPageBox.js";

import aniaPictures from "../../Image/Instructors/Ania-K.jpg";
import iwonaPictures from "../../Image/Instructors/Iwona-L.jpg";
import kamilPictures from "../../Image/Instructors/Kamil-S.jpg";
import marekPictures from "../../Image/Instructors/Marek-W.jpg";
import martaPictures from "../../Image/Instructors/Marta-W.jpg";
import patrykPictures from "../../Image/Instructors/Patryk-Z.jpg";
import zosiaPictures from "../../Image/Instructors/Zosia-H.jpg";

import data from "./dataInstructors.json";

function InstructorsPage() {
	return (
		<div className='instructors-page'>
			<h1 className='instructors-page__title'>Nasi instruktorzy:</h1>
			<div className='instructors-page__container'>
				<InstructorsPageBox
					name={data.n1.imie}
					img={aniaPictures}
					txt={data.n1}
				/>
				<InstructorsPageBox
					name={data.n2.imie}
					img={iwonaPictures}
					txt={data.n2}
				/>
				<InstructorsPageBox
					name={data.n3.imie}
					img={kamilPictures}
					txt={data.n3}
				/>
				<InstructorsPageBox
					name={data.n4.imie}
					img={marekPictures}
					txt={data.n4}
				/>
				<InstructorsPageBox
					name={data.n5.imie}
					img={martaPictures}
					txt={data.n5}
				/>
				<InstructorsPageBox
					name={data.n6.imie}
					img={patrykPictures}
					txt={data.n6}
				/>
				<InstructorsPageBox
					name={data.n7.imie}
					img={zosiaPictures}
					txt={data.n7}
				/>
			</div>
		</div>
	);
}

export default InstructorsPage;
