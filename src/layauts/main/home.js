import News from "./News/News";
import Instructors from "./Instructors/Instructors";
import Dance from "./Dance/Dance";

import Heder from "./Header/Header";
import Kontakt from "../../Pages/ConcactPage/ConcactPage";

import Break from "./Break/Break";

function Home() {
	return (
		<div className='Home'>
			<Heder />
			<News />
			<Break text='Zajęcia' />
			<Dance />
			<Break text='Team' />
			<Instructors />
			<Break text='Dodatkowa Oferta' />
			<Dance />
			<Break text='kontakt' />
			<Kontakt />
		</div>
	);
}

export default Home;
