import img from "../../Image/SpecialOffer/party.jpg";

function OfertaSpecjalnaPage() {
	window.scrollTo(0, 0);
	return (
		<div className='special-offer-page'>
			<h1 className='special-offer-page__title'>Oferta Specjalna</h1>
			<div className='special-offer-page__container'>
				<div className='box'>
					<h2>Wieczór panieński</h2>
					<div className='box__lvlTwo'>
						<div className='box__txt'>
							<p>
								Wszystkim Paniom oferujemy jedyny w swoim
								rodzaju i niezapomniany wieczór panieński! To
								wyjątkowa oferta, dzięki której zachowasz
								wspomnienia na całe życie!
							</p>
							<p>
								Serdecznie zapraszamy do MOVI na wieczór
								panieński, na którym zaprezentujemy Paniom kroki
								dowolnie wybranego tańca. Będą Panie mogły
								skorzystać z godzinnej lub dwugodzinnej lekcji
								tańca, która przygotuje Was do wspaniałego
								wieczoru na mieście!{" "}
							</p>
							<p>
								Dziewczyny, gwarantujemy Wam wspaniały czas pod
								okiem instruktora, z lampką szampana, a to
								wszystko w pięknej oprawie, same się
								przekonajcie!
							</p>
							<p>
								Skontaktuj się z nami, a dopasujemy szczegóły
								pod Twoje oczekiwania.{" "}
							</p>
						</div>
						<img src={img} alt='party'></img>
					</div>
				</div>
				<div className='box'>
					<h2>Wynajem Sali </h2>
					<div className='box__lvlTwo'>
						<img src={img} alt='party'></img>
						<div className='box__txt'>
							<p>
								Planujesz ważne wydarzenie? Chcesz, aby
								posiadało wyjątkową oprawę? Pozwól, że
								przedstawimy Ci naszą ofertę wynajmu sali na
								wszystkie ważne dla Ciebie uroczystości!
							</p>
							<p>
								Nasza przepięknie przygotowana sala zadowoli
								każdego klienta, dajemy możliwość własnej
								inwencji w aranżacji wnętrza. Zapraszamy!
							</p>
						</div>
					</div>
				</div>
				<div className='box'>
					<h2>Wieczorki taneczne dla par (dorośli, seniorzy)</h2>
					<div className='box__lvlTwo'>
						<div className='box__txt'>
							<p>
								Idealna forma spędzenia wolnego czasu dla
								aktywnych!
							</p>
							<p>
								Serdecznie zapraszamy na wieczorki taneczne dla
								dorosłych i seniorów, na których spędzicie
								Państwo czas z rówieśnikami, poznacie nowych
								znajomych, posłuchacie wspaniałej tanecznej
								muzyki, a przede wszystkim będziecie się
								świetnie bawić w tańcu!
							</p>
							<p>
								Zapewniamy profesjonalną organizację i przyjazną
								atmosferę.
							</p>
						</div>
						<img src={img} alt='party'></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OfertaSpecjalnaPage;
