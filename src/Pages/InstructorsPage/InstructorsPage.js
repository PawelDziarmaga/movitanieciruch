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
			</div>
		</div>
	);
}

export default InstructorsPage;
