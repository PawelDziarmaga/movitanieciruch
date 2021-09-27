import { Route, Switch } from "react-router-dom";

import Home from "./home";

import Kontakt from "../../Pages/ConcactPage/ConcactPage";
import Taniec from "../../Pages/DancePage/DancePage";
import Fitness from "../../Pages/FitnessPage/FitnessPage";
import Grafik from "../../Pages/GraphicPage/GraphicPage";
import Instruktorzy from "../../Pages/InstructorsPage/InstructorsPage";
import Ofertaspecjalna from "../../Pages/OfertaSpecjalnaPage/OfertaSpecjalnaPage";
import Cennik from "../../Pages/PricePage/PricePage";
import HeaderPage from "../../Pages/HeaderPage/HeaderPage";
import ActivitiesPage from "../../Pages/ActivitiesPage/ActivitiesPage";

function Main() {
	return (
		<div className='main'>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/Zajecia'>
					<HeaderPage title='ZNAJDŹ SPOSÓB NA SIEBIE' />
					<ActivitiesPage />
				</Route>
				<Route path='/Kontakt'>
					<HeaderPage title='Kontakt' />
					<Kontakt />
				</Route>
				<Route path='/Taniec'>
					<HeaderPage title='Taniec' />
					<Taniec />
					<Fitness />
				</Route>
				<Route path='/Fitness'>
					<Fitness />
				</Route>
				<Route path='/Grafik'>
					<HeaderPage title='Grafik' />
					<Grafik />
				</Route>
				<Route path='/Instruktorzy'>
					<HeaderPage title='Team/trenerzy' />
					<Instruktorzy />
				</Route>

				<Route path='/Ofertaspecjalna'>
					<HeaderPage title='Dodatkowa oferta' />
					<Ofertaspecjalna />
				</Route>
				<Route path='/Cennik'>
					<HeaderPage title='Cennik' />
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
