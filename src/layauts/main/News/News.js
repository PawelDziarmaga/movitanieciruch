import { useEffect, useRef } from "react";
// import tools
import { autoSwiper } from "../../../tools/News/autoSwiper";
import { manualSwiper } from "../../../tools/News/manualSwiper";
import Swiper from "../../../tools/News/swiper";
import { manualClick } from "../../../tools/News/manualClick";
// import img
import NewsImg from "./NewsImg/NewsImg";

let activeSwiper = false;

function News() {
	let interval = useRef("null");
	const intervalTime = 12000;
	// sctive interval
	useEffect(() => {
		interval.current = setInterval(() => {
			autoSwiper();
		}, intervalTime);
		return () => clearInterval(interval.current);
	}, []);

	// sctive swiper
	useEffect(() => {
		if (activeSwiper === false) {
			new Swiper();

			document.addEventListener("swipeLeft", () => {
				manualSwiper("left");
			});
			document.addEventListener("swipeRight", () => {
				manualSwiper("right");
			});
			activeSwiper = true;
		}
	});

	const buttonsClassList = [
		"first-news active",
		"second-news",
		"third-news",
		"fourt-news",
		/*"fifth-news",*/
	];
	const buttons = buttonsClassList.map((element) => (
		<div
			key={element}
			onClick={(e) => {
				manualClick(e.target.classList[1]);
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
