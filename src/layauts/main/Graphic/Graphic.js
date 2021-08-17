import "./Graphic.css";

function Graphic() {
	return (
		<div id='idGraphic' className='graphic main-element'>
			<h1>Grafik</h1>
			<div className='graphic-link'>
				<lb-schedule-widget></lb-schedule-widget>
			</div>
		</div>
	);
}

export default Graphic;
