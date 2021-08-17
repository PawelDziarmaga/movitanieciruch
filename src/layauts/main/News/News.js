import "./News.css";

import SingleItem from "./SingleItem/SingleItem";

import FirstNews from "../../../Image/News/1News-CanvaInstagram-1080x1920.png";
import SecondNews from "../../../Image/News/2News-CanvaInstagram-1080x1920.png";
import ThirdNews from "../../../Image/News/3News-CanvaInstagram-1080x1920.png";
import FourthNews from "../../../Image/News/4News-CanvaInstagram-1080x1920.png";
import FifthNews from "../../../Image/News/5News-CanvaInstagram-1080x1920.png";

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
			<div className='news__slider '>
				<SingleItem
					NuberOfItem='first-news active'
					ImgItem={FirstNews}
					NewsTitle='UWAGA RUSZAMY!!'
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
