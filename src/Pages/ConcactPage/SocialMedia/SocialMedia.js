import facebook from "../../../Image/SocialMedia/facebook.png";
import instagram from "../../../Image/SocialMedia/instagram.png";
import youtube from "../../../Image/SocialMedia/youtube.png";

function SocialMedia() {
	return (
		<div className='SocialMedia-box'>
			<h1>Społeczność</h1>
			<ul>
				<li className='facebook'>
					<a href='https://www.facebook.com/movi.chorzow'>
						<img src={facebook} alt='facebook'></img>
						<span>Facebook</span>
					</a>
				</li>
				<li className='instagram'>
					<a href='https://www.instagram.com/movi.tanieciruch/'>
						<img src={instagram} alt='instagram'></img>
						<span>Instagram</span>
					</a>
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
