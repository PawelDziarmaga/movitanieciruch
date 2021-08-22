import "./BoxOne.css";

function BoxOne({ slubna }) {
	return (
		<div className='WeddingOffer__boxOne'>
			<img src={slubna} alt='slubna'></img>
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
