function BoxOne({ party, click }) {
	return (
		<div onClick={click} className='SpecialOffer__boxOne'>
			<div className='SpecialOffer__boxOne__title'>
				<h1>Oferta Specjalna</h1>
				<img src={party} alt='party'></img>
			</div>
			<p>
				Zaplanowaliście już swój najpiękniejszy dzień i potrzebujecie
				wyjątkowego pierwszego tańca? A może chcecie udoskonalić swoje
				umiejętności taneczne przed weselem? Ekipa MOVI jak żadna inna
				przygotuje Was do weselnej zabawy, nawet jeśli pozostawiliście
				to na ostatnią chwilę.{" "}
			</p>
		</div>
	);
}

export default BoxOne;
