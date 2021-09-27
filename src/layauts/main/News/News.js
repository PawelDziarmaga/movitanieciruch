import NewsImg from "./NewsImg/NewsImg";

import DATA from "../../../data.json";
import { useEffect, useRef } from "react";
import Swiper from "./swiper";

function News() {
	let interval = useRef(null);

	useEffect(() => {
		clearInterval(interval);
		interval.current = setInterval(autoNav, 10000);
		new Swiper();
		document.addEventListener("swipeLeft", () => autoNav("left"));
		document.addEventListener("swipeRight", () => autoNav("right"));
	});
	const manualNav = (event) => {
		clearInterval(interval);
		interval = setInterval(autoNav, 10000);
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

	const autoNav = function (move) {
		clearInterval(interval);
		interval = setInterval(autoNav, 10000);

		const btms = document.getElementsByClassName("news__navigation-btn");
		const slides = document.getElementsByClassName("news__slide");
		let classes = [];

		if (btms.length > 0) {
			for (let i = 0; i < btms.length; i++) {
				classes.push(btms[i].classList[2]);
			}

			let x = classes.findIndex((clas) => clas === "active");
			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				btms[i].classList.remove("active");
			}

			if (move === "right") {
				if (x < 0) {
					x = 0;
				} else if (x === 0) {
					x = btms.length - 1;
				} else {
					x--;
				}
			} else {
				if (x < 0) {
					x = 0;
				} else if (x >= btms.length - 1) {
					x = 0;
				} else {
					x++;
				}
			}
			if (move) {
				clearInterval(interval);
				interval = setInterval(autoNav, 10000);
			}

			slides[x].classList.add("active");
			btms[x].classList.add("active");
		}
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
