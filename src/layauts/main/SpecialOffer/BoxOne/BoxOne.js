function BoxOne({ party, click }) {
	return (
		<div className='SpecialOffer__boxOne'>
			<p>
				Zaplanowaliście już swój najpiękniejszy dzień i potrzebujecie
				wyjątkowego pierwszego tańca? A może chcecie udoskonalić swoje
				umiejętności taneczne przed weselem? Ekipa MOVI jak żadna inna
				przygotuje Was do weselnej zabawy, nawet jeśli pozostawiliście
				to na ostatnią chwilę.{" "}
			</p>
			<img onClick={click} src={party} alt='party'></img>
		</div>
	);
}

export default BoxOne;
