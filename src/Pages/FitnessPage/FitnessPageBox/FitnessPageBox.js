import FitnessPageBoxElement from "../FitnessPageBoxElement/FitnessPageBoxElement";

function FitnessPageBox({ title, img, txt, stan, setStan }) {
	const data = txt;

	const handlerClickTarget = ({ target }) => {
		const chosenElementClass = target.classList[0];

		const allElements = document.querySelectorAll(`.${title} div`);

		const chosenElement = document.querySelectorAll(
			`.${title} .${chosenElementClass}`
		);

		for (let i = 0; i < allElements.length; i++) {
			allElements[i].classList.remove("active");
			allElements[i].classList.remove("active-color");
		}

		if (stan !== chosenElementClass) {
			chosenElement[0].classList.add("active-color");
			chosenElement[2].classList.add("active");
			setStan(chosenElementClass);
		} else {
			setStan("");
		}
	};

	return (
		<div className='fitness-page__box'>
			<div className='description'>
				<img src={img} alt={title}></img>
				<div>
					<div className='description__p'>
						<p>{data.opis.n1}</p>
					</div>
				</div>
			</div>

			<div className={`description-fitness ${title}`}>
				<div className='description-fitness__felx'>
					{data.tance.n1.nazwa && (
						<div className={data.tance.n1.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n1.nazwaClass} ${title}`}>
								{data.tance.n1.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n2.nazwa && (
						<div className={data.tance.n2.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n2.nazwaClass} ${title}`}>
								{data.tance.n2.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n3.nazwa && (
						<div className={data.tance.n3.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n3.nazwaClass} ${title}`}>
								{data.tance.n3.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n4.nazwa && (
						<div className={data.tance.n4.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n4.nazwaClass} ${title}`}>
								{data.tance.n4.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n5.nazwa && (
						<div className={data.tance.n5.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n5.nazwaClass} ${title}`}>
								{data.tance.n5.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n6.nazwa && (
						<div className={data.tance.n6.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n6.nazwaClass} ${title}`}>
								{data.tance.n6.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n7.nazwa && (
						<div className={data.tance.n7.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n7.nazwaClass} ${title}`}>
								{data.tance.n7.nazwa}
							</h3>
						</div>
					)}
					{data.tance.n8.nazwa && (
						<div className={data.tance.n8.nazwaClass}>
							<h3
								onClick={handlerClickTarget}
								className={`${data.tance.n8.nazwaClass} ${title}`}>
								{data.tance.n8.nazwa}
							</h3>
						</div>
					)}
				</div>

				<div>
					<div className={`${data.tance.n1.nazwaClass} active`}>
						<FitnessPageBoxElement data={data.tance.n1.opis} />
					</div>
					<div className={data.tance.n2.nazwaClass}>
						<FitnessPageBoxElement data={data.tance.n2.opis} />
					</div>
					<div className={data.tance.n3.nazwaClass}>
						<FitnessPageBoxElement data={data.tance.n3.opis} />
					</div>
					<div className={data.tance.n4.nazwaClass}>
						<FitnessPageBoxElement data={data.tance.n4.opis} />
					</div>
					<div className={data.tance.n5.nazwaClass}>
						<FitnessPageBoxElement data={data.tance.n5.opis} />
					</div>
					<div className={data.tance.n6.nazwaClass}>
						<FitnessPageBoxElement data={data.tance.n6.opis} />
					</div>
					<div className={data.tance.n7.nazwaClass}>
						<FitnessPageBoxElement data={data.tance.n7.opis} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FitnessPageBox;
