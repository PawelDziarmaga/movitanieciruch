import "./Main.css";

import News from "./News/News";
import Instructors from "./Instructors/Instructors";
import Price from "./Price/Price";
import Graphic from "./Graphic/Graphic";
import Fitnes from "./Fitnes/Fitnes";
import Dance from "./Dance/Dance";
import Concact from "./Concact/Concact";
import About from "./About/About";

function Main() {
	return (
		<div className='main'>
			<News />
			<Fitnes />
			<Dance />
			<Graphic />
			<Price />
			<Instructors />
			<About />
			<Concact />
		</div>
	);
}

export default Main;
