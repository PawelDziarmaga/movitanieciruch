import NewsImg from "./NewsImg/NewsImg";

import { useEffect, useRef } from "react";

import { autoSwiper } from "../../../tools/News/autoSwiper";
import { manualSwiper } from "../../../tools/News/manualSwiper";
import Swiper from "../../../tools/News/swiper";
import { manualClick } from "../../../tools/News/manualClick";
function News() {
	let interval = useRef("null");
	const intervalTime = 8000;
	useEffect(() => {
		interval.current = setInterval(() => {
			autoSwiper();
		}, intervalTime);
		return () => clearInterval(interval.current);
	}, []);
	const clearIntervalFunction = () => {
		clearInterval(interval.current);
		interval.current = setInterval(() => {
			autoSwiper();
		}, intervalTime);
	};
	useEffect(() => {
		new Swiper();
		document.addEventListener("swipeLeft", () => {
			manualSwiper("left");
			clearIntervalFunction();
		});
		document.addEventListener("swipeRight", () => {
			manualSwiper("right");
			clearIntervalFunction();
		});
	}, []);
	const buttonsClassList = [
		"first-news active",
		"second-news",
		"third-news",
		/*"fourt-news",
		"fifth-news",*/
	];
	const buttons = buttonsClassList.map((element) => (
		<div
			onClick={(e) => {
				manualClick(e.target.classList[1]);
				console.log(e.target.classList[1]);
				clearIntervalFunction();
			}}
			className={`news__navigation-btn ${element}`}></div>
	));

	return (
		<div id='idNews' className='news main-element'>
			<div className='news__background'></div>
			<div className='news__container '>
				<NewsImg />
				<div className='news__navigation'>{buttons}</div>
			</div>
		</div>
	);
}

export default News;
