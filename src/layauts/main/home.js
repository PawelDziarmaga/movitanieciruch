import { useParams } from "react-router-dom";

import News from "./News/News";
import Dance from "./Dance/Dance";
import Ruch from "./Ruch/Dance";
import Heder from "./Header/Header";
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
			<Break text='Taniec' />
			<Dance />
			<Break text='Ruch' />
			<Ruch />
		</div>
	);
}

export default Home;
