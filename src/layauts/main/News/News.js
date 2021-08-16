import "./News.css";

import SingleItem from "./SingleItem/News";

import FirstNews from "../../../Image/News/FirstNews-CanvaPlakat-PNG-1587x2245.png";
import SecondNews from "../../../Image/News/SecondNews-CanvaPlakat-PNG-1587x2245.png";
import ThirdNews from "../../../Image/News/ThirdNews-CanvaPlakat-PNG-1587x2245.png";
import FourthNews from "../../../Image/News/FourthNews-CanvaPlakat-PNG-1587x2245.png";
import FifthNews from "../../../Image/News/FifthNews-CanvaPlakat-PNG-1587x2245.png";

function News() {
	const currentSlide = 1;
	const manualNav = (event) => {
		const chosenElementClass = event.target.classList[1];

		const slides = document.getElementsByClassName("news__slide");
		console.log(slides);
		slides[0].classList.remove("active");
		slides[1].classList.remove("active");
		slides[2].classList.remove("active");
		slides[3].classList.remove("active");
		slides[4].classList.remove("active");
		const btms = document.getElementsByClassName("news__navigation-btn");
		btms[0].classList.remove("active");
		btms[1].classList.remove("active");
		btms[2].classList.remove("active");
		btms[3].classList.remove("active");
		btms[4].classList.remove("active");

		const chosenElement =
			document.getElementsByClassName(chosenElementClass);
		chosenElement[0].classList.add("active");
		chosenElement[1].classList.add("active");
	};

	return (
		<div id='idNews' className='news main-element'>
			<div className='news__slider '>
				<SingleItem
					NuberOfItem='first-news active'
					ImgItem={FirstNews}
					NewsTitle='UWAGA RUSZAMY!'
				/>
				<SingleItem
					NuberOfItem='second-news'
					ImgItem={SecondNews}
					NewsTitle='Wielkie Otwarcie!'
				/>
				<SingleItem
					NuberOfItem='third-news'
					ImgItem={ThirdNews}
					NewsTitle='Już teraz!'
				/>
				<SingleItem
					NuberOfItem='fourt-news'
					ImgItem={FourthNews}
					NewsTitle='Nie przegap'
				/>
				<SingleItem
					NuberOfItem='fifth-news'
					ImgItem={FifthNews}
					NewsTitle='Czekamy w Chorzowie'
				/>

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
					<div
						onClick={manualNav}
						className='news__navigation-btn fourt-news'></div>
					<div
						onClick={manualNav}
						className='news__navigation-btn fifth-news'></div>
				</div>
			</div>
		</div>
	);
}

export default News;
