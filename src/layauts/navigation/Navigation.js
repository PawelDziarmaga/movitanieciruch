import "./Navigation.css";
import logo from "../../Image/LOGO-NAV.png";

function App() {
	return (
		<nav className='nav'>
			<ul className='nav__container'>
				<span className='nav__element nav__logo-container'>
					<img className='nav__logo' src={logo} alt='logo'></img>
				</span>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Aktualności
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Fitnes
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Taniec
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Grafik
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Cennik
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Instruktorzy
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						O nas
					</a>
				</li>
				<li className='nav__element nav__list-item'>
					<a className='nav__link' href='./'>
						Kontakt
					</a>
				</li>
				<span className='nav__element nav__hamburger'></span>
			</ul>
		</nav>
	);
}

export default App;
