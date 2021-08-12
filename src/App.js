import { BrowserRouter } from "react-router-dom";

import Navigation from "./layauts/navigation/Navigation";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navigation />
			</div>
		</BrowserRouter>
	);
}

export default App;
