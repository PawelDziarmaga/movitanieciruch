import News from "./News/News";
import Instructors from "./Instructors/Instructors";
import Price from "./Price/Price";
import Fitnes from "./Fitnes/Fitnes";
import Dance from "./Dance/Dance";
import WeddingOffer from "./WeddingOffer/WeddingOffer";
import About from "./About/About";
import Heder from "./Header/Header";
import SpecialOffer from "./SpecialOffer/SpecialOffer";

import Break from "./Break/Break";

function Home() {
	return (
		<div className='Home'>
			<Heder />
			<News />
			<Break text='Zobacz Grafik!' />
			<Dance />
			<Break text='Zobacz Grafik!' />
			<Fitnes />
			<Break text='Sprawdz godziny' />
			<WeddingOffer />
			<Break text='Zapisz się już teraz!' />
			<SpecialOffer />
			<Price />
			<Instructors />
			<About />
		</div>
	);
}

export default Home;
