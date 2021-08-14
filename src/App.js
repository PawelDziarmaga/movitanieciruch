import { BrowserRouter } from "react-router-dom";

import Navigation from "./layauts/navigation/Navigation";
import Main from "./layauts/main/Main";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navigation />
				<Main />
			</div>
		</BrowserRouter>
	);
}

export default App;
