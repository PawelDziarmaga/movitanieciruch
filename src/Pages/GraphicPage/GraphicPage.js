import React from "react";
import "./GraphicPage.css";
let lb;
class GraphicPage extends React.Component {
	componentDidMount() {
		/*lb("mounted");*/
	}

	componentWillUnmount() {}
	render() {
		return (
			<div className='graphic-page'>
				<lb-schedule-widget></lb-schedule-widget>
			</div>
		);
	}
}

export default GraphicPage;
