import React from "react";
import "./GraphicPage.css";

class GraphicPage extends React.Component {
	componentDidMount() {
		window.lb("mounted");
	}
	render() {
		return (
			<div className='graphic-page'>
				<lb-schedule-widget></lb-schedule-widget>
			</div>
		);
	}
}

export default GraphicPage;
