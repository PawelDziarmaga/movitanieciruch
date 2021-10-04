import SingleItem from "../SingleItem/SingleItem";

import FirstNews from "../../../../Image/News/1News-CanvaInstagram-1080x1920.png";
import SecondNews from "../../../../Image/News/2News-CanvaInstagram-1080x1920.png";
import ThirdNews from "../../../../Image/News/3News-CanvaInstagram-1080x1920.png";
import FourthNews from "../../../../Image/News/4News-CanvaInstagram-1080x1920.png";
import FifthNews from "../../../../Image/News/5News-CanvaInstagram-1080x1920.png";

function NewsImg() {
	const newsClassList = [
		["first-news active", FirstNews],
		["second-news", SecondNews],
		["third-news", ThirdNews],
		/*["fourt-news", FourthNews],
		["fifth-news", FifthNews],*/
	];
	const news = newsClassList.map((element) => (
		<SingleItem NuberOfItem={`${element[0]} `} ImgItem={element[1]} />
	));

	return <div>{news}</div>;
}

export default NewsImg;
