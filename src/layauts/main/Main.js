import { Route, Switch } from "react-router-dom";

import Home from "./home";

import ONas from "../../Pages/AboutPage/AboutPage";
import Kontakt from "../../Pages/ConcactPage/ConcactPage";
import Taniec from "../../Pages/DancePage/DancePage";
import Fitness from "../../Pages/FitnesPage/FitnesPage";
import Grafik from "../../Pages/GraphicPage/GraphicPage";
import Instruktorzy from "../../Pages/InstructorsPage/InstructorsPage";
import Aktualnosci from "../../Pages/NewsPage/NewsPage";
import Ofertaslubna from "../../Pages/OfertaSlubnaPage/OfertaSlubnaPage";
import Ofertaspecjalna from "../../Pages/OfertaSpecjalnaPage/OfertaSpecjalnaPage";
import Cennik from "../../Pages/PricePage/PricePage";

function Main() {
	return (
		<div className='main'>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/ONas'>
					<ONas />
				</Route>
				<Route path='/Kontakt'>
					<Kontakt />
				</Route>
				<Route path='/Taniec'>
					<Taniec />
				</Route>
				<Route path='/Fitness'>
					<Fitness />
				</Route>
				<Route path='/Grafik'>
					<Grafik />
				</Route>
				<Route path='/Instruktorzy'>
					<Instruktorzy />
				</Route>
				<Route path='/Aktualnosci'>
					<Aktualnosci />
				</Route>
				<Route path='/Ofertaslubna'>
					<Ofertaslubna />
				</Route>
				<Route path='/Ofertaspecjalna'>
					<Ofertaspecjalna />
				</Route>
				<Route path='/Cennik'>
					<Cennik />
				</Route>
				<Route path='*'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default Main;
/*
			<Route path='/' exact component={Home} />
			<Route path='/oNas' component={AboutPage} />
			<Route path='/kontakt' component={ConcactPage} />
			<Route path='/taniec' component={DancePage} />
			<Route path='/fitness' component={FitnesPage} />
			<Route path='/grafik' component={GraphicPage} />
			<Route path='/instruktorzy' component={InstructorsPage} />
			<Route path='/aktualnosci' component={NewsPage} />
			<Route path='/ofertaslubna' t component={OfertaSlubnaPage} />
			<Route path='/ofertaspecjalna' component={OfertaSpecjalnaPage} />
			<Route path='/cennik' component={PricePage} />
*/
