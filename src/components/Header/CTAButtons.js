import { IoDocumentTextSharp } from 'react-icons/io5';
import resume from '../../AJ_Bates_Resume.pdf';

export default function CTAButtons() {
	return (
		<p className='cta_button_container'>
			<button className='link_button cta_link'>
				<a href='#contact-me'>Let's talk!</a>
			</button>
			<a
				href={resume}
				type='resume/pdf'
				title='resume'
				download
			>
				<IoDocumentTextSharp className='resume_link' />
			</a>
		</p>
	);
}
