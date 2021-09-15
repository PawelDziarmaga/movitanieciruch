import "./GraphicPage.css";

function GraphicPage() {
	window.scrollTo(0, 0);

	return (
		<div className='graphic-page'>
			<h1>Grafik</h1>
			<lb-schedule-widget
				id='fisseyElement'
				location='9F459323-8B34-D3F6-47F7-E50072BE1F5C'
				hide-header='true'></lb-schedule-widget>
		</div>
	);
}

export default GraphicPage;
