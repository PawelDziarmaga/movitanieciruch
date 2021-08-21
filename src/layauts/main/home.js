import "./Home.css";

import News from "./News/News";
import Instructors from "./Instructors/Instructors";
import Price from "./Price/Price";
import Graphic from "./Graphic/Graphic";
import Fitnes from "./Fitnes/Fitnes";
import Dance from "./Dance/Dance";
import WeddingOffer from "./WeddingOffer/WeddingOffer";
import SpecialOffer from "./SpecialOffer/SpecialOffer";

import Break from "./Break/Break";

function Home() {
	return (
		<div className='Home'>
			<News />
			<Dance />
			<Fitnes />
			<Break text='Sprawdz Grafik!!' />
			<WeddingOffer />
			<SpecialOffer />
			<Break text='Zapisz się już teraz!!' />
			<Price />
			<Instructors />
		</div>
	);
}

export default Home;
