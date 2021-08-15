import { BrowserRouter } from "react-router-dom";

import Navigation from "./layauts/navigation/Navigation";
import Main from "./layauts/main/Main";
import Footer from "./layauts/footer/footer";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navigation />
				<Main />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
