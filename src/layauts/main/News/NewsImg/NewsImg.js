import "./NewsImg.css";

import SingleItem from "../SingleItem/SingleItem";

import FirstNews from "../../../../Image/News/1News-CanvaInstagram-1080x1920.png";
import SecondNews from "../../../../Image/News/2News-CanvaInstagram-1080x1920.png";
import ThirdNews from "../../../../Image/News/3News-CanvaInstagram-1080x1920.png";
import FourthNews from "../../../../Image/News/4News-CanvaInstagram-1080x1920.png";
import FifthNews from "../../../../Image/News/5News-CanvaInstagram-1080x1920.png";

import DATA from "../../../../data.json";

function NewsImg() {
	return (
		<div className='news__slider '>
			{DATA.news1.tytul && (
				<SingleItem
					NuberOfItem='first-news active'
					ImgItem={FirstNews}
					NewsTitle={DATA.news1.tytul}
				/>
			)}
			{DATA.news2.tytul && (
				<SingleItem
					NuberOfItem='second-news'
					ImgItem={SecondNews}
					NewsTitle={DATA.news2.tytul}
				/>
			)}
			{DATA.news3.tytul && (
				<SingleItem
					NuberOfItem='third-news'
					ImgItem={ThirdNews}
					NewsTitle={DATA.news3.tytul}
				/>
			)}
			{DATA.news4.tytul && (
				<SingleItem
					NuberOfItem='fourt-news'
					ImgItem={FourthNews}
					NewsTitle={DATA.news4.tytul}
				/>
			)}
			{DATA.news5.tytul && (
				<SingleItem
					NuberOfItem='fifth-news'
					ImgItem={FifthNews}
					NewsTitle={DATA.news5.tytul}
				/>
			)}
		</div>
	);
}

export default NewsImg;
