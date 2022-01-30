import SingleItem from "../SingleItem/SingleItem";

import FirstNews from "../../../../Image/News/Mini-360px-640px/1News.jpg";
import SecondNews from "../../../../Image/News/Mini-360px-640px/2News.jpg";
import ThirdNews from "../../../../Image/News/Mini-360px-640px/3News.jpg";
import FourthNews from "../../../../Image/News/Mini-360px-640px/4News.jpg";
/*import FifthNews from "../../../../Image/News/Mini-360px-640px/5News-CanvaInstagram-1080x1920.jpg";*/

function NewsImg() {
	const newsClassList = [
		["first-news active", FirstNews],
		["second-news", SecondNews],
		["third-news", ThirdNews],
		["fourt-news", FourthNews],
		/*["fifth-news", FifthNews],*/
	];
	const news = newsClassList.map((element) => (
		<SingleItem
			key={element[0]}
			NuberOfItem={`${element[0]} `}
			ImgItem={element[1]}
		/>
	));

	return <div>{news}</div>;
}

export default NewsImg;
