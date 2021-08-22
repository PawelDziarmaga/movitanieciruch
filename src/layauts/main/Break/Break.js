import "./Break.css";

import img from "../../../Image/arrow.png";

function Break({ text }) {
	return (
		<div className='break'>
			<h2>{text}</h2>

			<img src={img} alt={text}></img>
		</div>
	);
}

export default Break;
