import "./News.css";
import firstNewsPicture from "../../../Image/News/FirstNews.jpg";
import secondNewsPicture from "../../../Image/News/SecondNews.jpg";
import thirdNewsPicture from "../../../Image/News/ThirdNews.jpg";
import { useEffect, useState } from "react";

function News() {
	const currentSlide = 1;
	const manualNav = (event) => {
		const chosenElementClass = event.target.classList[1];

		const slides = document.getElementsByClassName("news__slide");
		console.log(slides);
		slides[0].classList.remove("active");
		slides[1].classList.remove("active");
		slides[2].classList.remove("active");
		const btms = document.getElementsByClassName("news__navigation-btn");
		btms[0].classList.remove("active");
		btms[1].classList.remove("active");
		btms[2].classList.remove("active");

		const chosenElement =
			document.getElementsByClassName(chosenElementClass);
		chosenElement[0].classList.add("active");
		chosenElement[1].classList.add("active");
	};

	return (
		<div className='news main-element'>
			<div className='news__slider '>
				<div className='news__slide first-news active'>
					<img src={firstNewsPicture} alt='First news'></img>
					<div className='news__info'>
						<h3>UWAGA RUSZAMY!</h3>
						<p>
							Już niedługo w Chorzowie powstanie wyjątkowe
							miejsce! Miejsce pełne pasji, zaangażowania, radości
							i satysfakcji.
						</p>
					</div>
				</div>

				<div className='news__slide second-news'>
					<img src={secondNewsPicture} alt='First news'></img>
					<div className='news__info'>
						<h3>UWAGA RUSZAMY!</h3>
						<p>
							Już niedługo w Chorzowie powstanie wyjątkowe
							miejsce! Miejsce pełne pasji, zaangażowania, radości
							i satysfakcji.
						</p>
					</div>
				</div>

				<div className='news__slide third-news'>
					<img src={thirdNewsPicture} alt='First news'></img>
					<div className='news__info'>
						<h3>UWAGA RUSZAMY!</h3>
						<p>
							Już niedługo w Chorzowie powstanie wyjątkowe
							miejsce! Miejsce pełne pasji, zaangażowania, radości
							i satysfakcji.
						</p>
					</div>
				</div>

				<div className='news__navigation'>
					<div
						onClick={manualNav}
						className='news__navigation-btn first-news active'></div>
					<div
						onClick={manualNav}
						className='news__navigation-btn second-news'></div>
					<div
						onClick={manualNav}
						className='news__navigation-btn third-news'></div>
				</div>
			</div>
		</div>
	);
}

export default News;
