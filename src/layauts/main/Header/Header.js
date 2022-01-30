import { useHistory } from "react-router-dom";

function Header() {
	let history = useHistory();

	function handleClick(e) {
		const choosen = e.target.classList[1];

		if (choosen === "btn__news") {
			history.push("/Grafik");
		} else {
			history.push("/Onas");
		}
	}
	return (
		<div id='idHeader' className='Header main-element'>
			<div className='Header__image'></div>
			<div className='Header__content'>
				<h1>MOVI – MIEJSCE PEŁNE TAŃCA I RUCHU.</h1>
				<div className='Header__content__buttons'>
					<button
						className='Header__content__buttons__about'
						onClick={handleClick}>
						O nas <span>»</span>
					</button>
					<button
						className='Header__content__buttons__news btn__news'
						onClick={handleClick}>
						Grafik <span>»</span>
					</button>
				</div>

				<div className='arrow'>»</div>
			</div>
		</div>
	);
}

export default Header;
