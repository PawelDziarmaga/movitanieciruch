import facebook from "../../../Image/SocialMedia/facebook.png";
import instagram from "../../../Image/SocialMedia/instagram.png";
import youtube from "../../../Image/SocialMedia/youtube.png";

function SocialMedia() {
	return (
		<div className='SocialMedia-box'>
			<h1>Społeczność</h1>
			<ul>
				<li className='facebook'>
					<img src={facebook} alt='facebook'></img>
					<span>Facebook</span>
				</li>
				<li className='instagram'>
					<img src={instagram} alt='instagram'></img>
					<span>Instagram</span>
				</li>
				<li className='instagram'>
					<img src={youtube} alt='instagram'></img>
					<span>Youtube</span>
				</li>
			</ul>
		</div>
	);
}

export default SocialMedia;
