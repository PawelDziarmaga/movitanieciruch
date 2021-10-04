import { useParams } from "react-router-dom";

import News from "./News/News";
import Dance from "./Dance/Dance";
import Heder from "./Header/Header";
import Kontakt from "../../Pages/ConcactPage/ConcactPage";
import Break from "./Break/Break";

function Home() {
	const sectionPath = useParams();
	if (sectionPath[0] === "/Aktualnosci") {
		window.scrollTo({
			top: window.innerHeight,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<div className='Home'>
			<Heder />
			<News />
			<Break text='Zajęcia' />
			<Dance />
			<Break text='kontakt' />
			<Kontakt />
		</div>
	);
}

export default Home;
