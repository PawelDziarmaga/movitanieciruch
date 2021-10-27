import InstructorsPageBox from "./InstructorsPageBox/InstructorsPageBox.js";

import data from "./dataInstructors.json";

function InstructorsPage() {
	return (
		<div className='instructors-page'>
			<div className='instructors-page__container'>
				<InstructorsPageBox name={data.n1.imie} txt={data.n1} />
				<InstructorsPageBox name={data.n2.imie} txt={data.n2} />
				<InstructorsPageBox name={data.n3.imie} txt={data.n3} />
			</div>
		</div>
	);
}

export default InstructorsPage;
