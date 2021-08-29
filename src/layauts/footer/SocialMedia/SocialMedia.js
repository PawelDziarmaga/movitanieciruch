import facebook from "../../../Image/SocialMedia/facebook.png";
import instagram from "../../../Image/SocialMedia/instagram.png";

function SocialMedia() {
	return (
		<div className='footer__SocialMedia-box'>
			<h2>SocialMedia</h2>
			<div className='SocialMedia-box__icon'>
				<img src={facebook} alt='facebook'></img>
				<img src={instagram} alt='instagram'></img>
			</div>
		</div>
	);
}

export default SocialMedia;
