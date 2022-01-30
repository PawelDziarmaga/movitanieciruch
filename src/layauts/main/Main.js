import { Route, Switch } from "react-router-dom";

import Home from "./home";

import ActivitiesPage from "../../Pages/ActivitiesPage/ActivitiesPage";
import Grafik from "../../Pages/GraphicPage/GraphicPage";
/*import Instruktorzy from "../../Pages/InstructorsPage/InstructorsPage";*/
/*import Cennik from "../../Pages/PricePage/PricePage";*/
/*import Ofertaspecjalna from "../../Pages/OfertaSpecjalnaPage/OfertaSpecjalnaPage";*/
import About from "../../Pages/AboutPage/AboutPage";
import Kontakt from "../../Pages/ConcactPage/ConcactPage";

import Taniec from "../../Pages/DancePage2/DancePage2";
import Fitness from "../../Pages/FitnessPage/FitnessPage";

import HeaderPage from "../../Pages/HeaderPage/HeaderPage";

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
				<Route path='/Grafik'>
					<HeaderPage title='Grafik' />
					<Grafik />
				</Route>

				<Route path='/Onas'>
					<HeaderPage title='POZNAJMY SIĘ' />
					<About />
				</Route>
				<Route path='/Kontakt'>
					<HeaderPage title='Kontakt' />
					<Kontakt />
				</Route>

				<Route path='/Taniec/:message'>
					<HeaderPage title='Taniec' />
					<Taniec />
				</Route>
				<Route path='/Ruch/:message'>
					<HeaderPage title='Ruch' />
					<Fitness />
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
	<Route path='/Instruktorzy'>
					<HeaderPage title='Team/trenerzy' />
					<Instruktorzy />
				</Route>
				<Route path='/Cennik'>
					<HeaderPage title='Cennik' />
					<Cennik />
				</Route>
				<Route path='/Ofertaspecjalna'>
					<HeaderPage title='Dodatkowa oferta' />
					<Ofertaspecjalna />
				</Route>
*/
