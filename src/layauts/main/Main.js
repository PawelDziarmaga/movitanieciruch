import { Route } from "react-router-dom";

import Home from "./home";

import AboutPage from "../../Pages/AboutPage/AboutPage";
import ConcactPage from "../../Pages/ConcactPage/ConcactPage";
import DancePage from "../../Pages/DancePage/DancePage";
import FitnesPage from "../../Pages/FitnesPage/FitnesPage";
import GraphicPage from "../../Pages/GraphicPage/GraphicPage";
import InstructorsPage from "../../Pages/InstructorsPage/InstructorsPage";
import NewsPage from "../../Pages/NewsPage/NewsPage";
import OfertaSlubnaPage from "../../Pages/OfertaSlubnaPage/OfertaSlubnaPage";
import OfertaSpecjalnaPage from "../../Pages/OfertaSpecjalnaPage/OfertaSpecjalnaPage";
import PricePage from "../../Pages/PricePage/PricePage";

function Main() {
	return (
		<div className='main'>
			<Route path='/' exact component={Home} />
			<Route path='/oNas' exact component={AboutPage} />
			<Route path='/kontakt' exact component={ConcactPage} />
			<Route path='/taniec' exact component={DancePage} />
			<Route path='/fitness' exact component={FitnesPage} />
			<Route path='/grafik' exact component={GraphicPage} />
			<Route path='/instruktorzy' exact component={InstructorsPage} />
			<Route path='/aktualnosci' exact component={NewsPage} />
			<Route path='/ofertaslubna' exact component={OfertaSlubnaPage} />
			<Route
				path='/ofertaspecjalna'
				exact
				component={OfertaSpecjalnaPage}
			/>
			<Route path='/cennik' exact component={PricePage} />
		</div>
	);
}

export default Main;
