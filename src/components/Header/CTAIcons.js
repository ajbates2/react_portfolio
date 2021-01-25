import { IoIosBeer } from 'react-icons/io';
import { CgCodeSlash, CgMusicSpeaker } from 'react-icons/cg';
import { GiCoffeeMug } from 'react-icons/gi';
import AirMax1 from '../../icons/AirMax1';

export default function CTAIcons() {

	return (
		<p className='cta_icon_container'>
			<IoIosBeer className='cta_icons beer' />
			<GiCoffeeMug className='cta_icons coffee' />
			<CgMusicSpeaker className='cta_icons speaker' />
			<AirMax1 className='cta_icons' />
			<CgCodeSlash className='cta_icons code' />
		</p>
	);
}
