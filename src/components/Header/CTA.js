import { IoIosBeer } from 'react-icons/io';
import { CgMusicSpeaker } from 'react-icons/cg';
import { GiConverseShoe } from 'react-icons/gi';
import { GrReactjs } from 'react-icons/gr';
import CTAButtons from './CTAButtons';

export default function CTA() {
	return (
		<div className='header_cta'>
			<h1 className='my_name'>AJ Bates</h1>
			<p className='cta_icon_container'>
				<IoIosBeer className='cta_icons' />
				<CgMusicSpeaker className='cta_icons' />
				<GiConverseShoe className='cta_icons' />
				<GrReactjs className='cta_icons' />
			</p>
			<h2 className='cta_description'>Full-stack JavaScript developer</h2>
			<CTAButtons />
		</div>
	);
}
