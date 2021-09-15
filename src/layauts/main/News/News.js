import NewsImg from "./NewsImg/NewsImg";

import DATA from "../../../data.json";

function News() {
	const manualNav = (event) => {
		const chosenElementClass = event.target.classList[1];

		const slides = document.getElementsByClassName("news__slide");
		const btms = document.getElementsByClassName("news__navigation-btn");

		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
			btms[i].classList.remove("active");
		}

		const chosenElement =
			document.getElementsByClassName(chosenElementClass);
		chosenElement[0].classList.add("active");
		chosenElement[1].classList.add("active");
	};

	return (
		<div id='idNews' className='news main-element'>
			<div className='news__background'></div>
			<div className='news__container '>
				<NewsImg />

				<div className='news__navigation'>
					{DATA.news1.tytul && (
						<div
							onClick={manualNav}
							className='news__navigation-btn first-news active'></div>
					)}
					{DATA.news2.tytul && (
						<div
							onClick={manualNav}
							className='news__navigation-btn second-news'></div>
					)}
					{DATA.news3.tytul && (
						<div
							onClick={manualNav}
							className='news__navigation-btn third-news'></div>
					)}
					{DATA.news4.tytul && (
						<div
							onClick={manualNav}
							className='news__navigation-btn fourt-news'></div>
					)}
					{DATA.news5.tytul && (
						<div
							onClick={manualNav}
							className='news__navigation-btn fifth-news'></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default News;
