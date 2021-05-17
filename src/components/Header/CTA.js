import CTAButtons from './CTAButtons';
import CTAIcons from './CTAIcons';

export default function CTA() {
	return (
		<div className='header_cta'>
			<h1 className='my_name'>AJ Bates</h1>
			<CTAIcons />
			<h2 className='cta_description'>Full-Stack Developer</h2>
			<CTAButtons />
		</div>
	);
}
