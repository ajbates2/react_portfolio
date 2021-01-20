import { IoIosBeer } from 'react-icons/io';
import { CgCodeSlash, CgMusicSpeaker } from 'react-icons/cg';
import { GiCoffeeMug, GiConverseShoe } from 'react-icons/gi';

export default function CTAIcons() {

	return (
		<p className='cta_icon_container'>
			<IoIosBeer className='cta_icons' title='I like beer'/>
			<GiCoffeeMug className='cta_icons' title='I like coffee' />
			<CgMusicSpeaker className='cta_icons' title='I like music' />
			<GiConverseShoe className='cta_icons' title='I like shoes' />
			<CgCodeSlash className='cta_icons' title='I like to code' />
		</p>
	);
}
