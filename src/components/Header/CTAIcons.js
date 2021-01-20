import { IoIosBeer } from 'react-icons/io';
import { CgCodeSlash, CgMusicSpeaker } from 'react-icons/cg';
import { GiCoffeeMug, GiConverseShoe } from 'react-icons/gi';

export default function CTAIcons() {

	return (
		<p className='cta_icon_container'>
			<IoIosBeer className='cta_icons' />
			<GiCoffeeMug className='cta_icons' />
			<CgMusicSpeaker className='cta_icons' />
			<GiConverseShoe className='cta_icons' />
			<CgCodeSlash className='cta_icons' />
		</p>
	);
}
