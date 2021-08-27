import { useState } from "react";
import DacePageBoxElement from "../DacePageBoxElement/DacePageBoxElement";

function DancePageBox({ title, img, txt }) {
	const data = txt;
	const [stan, setStan] = useState("");
	const handlerClick = ({ target }) => {
		const chosenElementClass = target.classList[0];

		const allElements = document.querySelectorAll(`.${title} div`);

		const chosenElement = document.querySelectorAll(
			`.${title} .${chosenElementClass}`
		);

		for (let i = 0; i < allElements.length; i++) {
			allElements[i].classList.remove("active");
		}

		if (stan !== chosenElementClass) {
			chosenElement[0].classList.add("active");
			setStan(chosenElementClass);
		} else {
			setStan("");
		}
	};
	return (
		<div className='dance-page__box'>
			<h1 className='dance-page__title'>{title}</h1>
			<div className='description'>
				<img src={img} alt={title}></img>
				<div className='description__p'>
					{data.opis.n1 && <p>{data.opis.n1}</p>}
					{data.opis.n2 && <p>{data.opis.n2}</p>}
					{data.opis.n3 && <p>{data.opis.n3}</p>}
					{data.opis.n4 && <p>{data.opis.n4}</p>}
					{data.opis.n5 && <p>{data.opis.n5}</p>}
					{data.opis.n6 && <p>{data.opis.n6}</p>}
					{data.opis.n7 && <p>{data.opis.n7}</p>}
				</div>
			</div>
			<div className={`description-dance ${title}`}>
				<div className={data.tance.n1.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n1.nazwa} ${title}`}>
						{data.tance.n1.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n1.opis} />
				</div>
				<div className={data.tance.n2.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n2.nazwa} ${title}`}>
						{data.tance.n2.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n2.opis} />
				</div>
				<div className={data.tance.n3.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n3.nazwa} ${title}`}>
						{data.tance.n3.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n3.opis} />
				</div>
				<div className={data.tance.n4.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n4.nazwa} ${title}`}>
						{data.tance.n4.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n4.opis} />
				</div>
				<div className={data.tance.n5.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n5.nazwa} ${title}`}>
						{data.tance.n5.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n5.opis} />
				</div>
				<div className={data.tance.n6.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n6.nazwa} ${title}`}>
						{data.tance.n6.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n6.opis} />
				</div>
				<div className={data.tance.n7.nazwa}>
					<h3
						onClick={handlerClick}
						className={`${data.tance.n7.nazwa} ${title}`}>
						{data.tance.n7.nazwa}
					</h3>
					<DacePageBoxElement data={data.tance.n7.opis} />
				</div>
			</div>
		</div>
	);
}

export default DancePageBox;
