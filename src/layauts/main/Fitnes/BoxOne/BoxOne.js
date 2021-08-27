function BoxOne({ fitness, click }) {
	return (
		<div className='fitness__boxOne'>
			<p id='fitness__boxOne-p'>
				Fitness ozwala kompleksowo zadbać o całe nasze ciało! O jego
				piękny wygląd, o sprawność, wytrzymałość. To także rodzaj stylu
				życia wspierający zdrowe odżywianie, dobre nawyki, wymagający
				aktywności, umiejętności zachowania odpowiednich proporcji
				pomiędzy pracą i wypoczynkiem
			</p>
			<img onClick={click} src={fitness} alt='fitness'></img>
		</div>
	);
}

export default BoxOne;
