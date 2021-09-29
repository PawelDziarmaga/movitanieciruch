function InstructorsPageBox({ img, name, txt }) {
	return (
		<div className='instructors-page__box'>
			<h2>{name}</h2>
			<div className='instructors-page__box__heder'>
				<div className='instructors-page__box__txt'>
					{txt.opis.n1 && <p>{txt.opis.n1}</p>}
					{txt.opis.n2 && <p>{txt.opis.n2}</p>}
					{txt.opis.n3 && <p>{txt.opis.n3}</p>}
					{txt.opis.n4 && <p>{txt.opis.n4}</p>}
				</div>
			</div>
		</div>
	);
}

export default InstructorsPageBox;
