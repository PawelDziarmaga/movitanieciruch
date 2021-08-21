import "./Break.css";

import img from "../../../Image/arrow.png";

function Break({ text }) {
	return (
		<div className='break'>
			<h2>{text}</h2>
			<div className='break__box'>
				<img src={img} alt={text}></img>
			</div>
		</div>
	);
}

export default Break;
