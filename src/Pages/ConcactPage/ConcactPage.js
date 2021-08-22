import "./ConcactPage.css";

function ConcactPage() {
	return (
		<div className='concact-page'>
			<h1>Kontakt</h1>
			<div className='concact-page__map-box'>
				<h2>Wskazówki dojazdu</h2>
				<div className='concact-page__map'>
					<iframe
						title='abc'
						src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1071.370459825109!2d18.97424637156411!3d50.30755487628935!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1629652076785!5m2!1spl!2spl'
						width='600'
						height='450'
						allowfullscreen=''
						loading='lazy'></iframe>
					<ul>
						<li>MOVI taniec i ruch</li>
						<li>plac Świętego Jana 31B</li>
						<li>41-503 Chorzów</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ConcactPage;
