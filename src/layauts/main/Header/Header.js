import { useHistory } from "react-router-dom";

function Header() {
	let history = useHistory();

	function handleClick(e) {
		const choosen = e.target.classList[1];
		console.log(choosen);
		if (choosen === "btn__news") {
			const location = {
				pathname: "Aktualnosci",
			};
			history.push(location);
		} else {
			history.push("/Onas");
		}
	}
	return (
		<div id='idHeader' className='Header main-element'>
			<div className='Header__image'></div>
			<div className='Header__content'>
				<h1>
					Już niebawem otwieramy dla Was MOVI. Miejsce pełne TAŃCA I
					RUCHU. Nie możemy się już doczekać, żeby spotkać się z Tobą!
				</h1>
				<div className='Header__content__buttons'>
					<button
						className='Header__content__buttons__about'
						onClick={handleClick}>
						O nas <span>»</span>
					</button>
					<button
						className='Header__content__buttons__news btn__news'
						onClick={handleClick}>
						Aktualności <span>»</span>
					</button>
				</div>

				<div className='arrow'>»</div>
			</div>
		</div>
	);
}

export default Header;
