function Adress() {
	return (
		<div className='adress-box'>
			<div>
				<h1>Adres</h1>
				<ul className='adress-box__adress'>
					<li>MOVI taniec i ruch</li>
					<li>plac Świętego Jana 31B</li>
					<li>41-503 Chorzów</li>
				</ul>
			</div>
			<div>
				<h1>Kontakt</h1>
				<ul className='adress-box__kontakt'>
					<li>
						email: <span>info@movitanieciruch.pl</span>
					</li>
					<li>
						telefon: <span>576 606 566</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Adress;
