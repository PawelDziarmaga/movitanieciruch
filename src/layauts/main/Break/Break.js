import { useHistory } from "react-router";

import img from "../../../Image/arrow.png";

function Break({ text }) {
	const history = useHistory();
	const handleClick = () => {
		const location = {
			pathname: "/Grafik",
		};
		window.scrollTo(0, 0);
		history.push(location);
	};
	return (
		<div onClick={handleClick} className='break'>
			<h2>{text}</h2>

			<img src={img} alt={text}></img>
		</div>
	);
}

export default Break;
