import React, { useEffect, useState } from "react";

import "./GraphicPage.css";

function GraphicPage() {
	const [grafik, setGrafik] = useState("");

	useEffect(() => {
		setGrafik(
			<lb-schedule-widget
				location='9F459323-8B34-D3F6-47F7-E50072BE1F5C'
				hide-header='true'></lb-schedule-widget>
		);
	}, []);

	return (
		<div className='graphic-page'>
			<h1>Grafik</h1>
			{grafik}
		</div>
	);
}

export default GraphicPage;
