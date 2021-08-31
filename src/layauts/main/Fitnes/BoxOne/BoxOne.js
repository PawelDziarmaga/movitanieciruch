function BoxOne({ fitness, click }) {
	return (
		<div className='fitness__boxOne'>
			<div className='fitness__boxOne__title'>
				<h1>Fitness</h1>
				<img onClick={click} src={fitness} alt='fitness'></img>
			</div>
			<p id='fitness__boxOne-p'>
				Fitness ozwala kompleksowo zadbać o całe nasze ciało! O jego
				piękny wygląd, o sprawność, wytrzymałość. To także rodzaj stylu
				życia wspierający zdrowe odżywianie, dobre nawyki, wymagający
				aktywności, umiejętności zachowania odpowiednich proporcji
				pomiędzy pracą i wypoczynkiem
			</p>
		</div>
	);
}

export default BoxOne;
