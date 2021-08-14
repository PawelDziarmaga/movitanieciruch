import "./Graphic.css";
import ImgGraphic from "../../../Image/Graphic/first-hall.jpg";

function Graphic() {
	return (
		<div className='graphic main-element'>
			<h1>Grafik</h1>
			<div className='graphic-link'>
				<img
					src={ImgGraphic}
					alt='first-hall'
					className='graphicImg graphic__first-hall'></img>

			</div>
		</div>
	);
}

export default Graphic;
