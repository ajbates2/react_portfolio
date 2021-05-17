import { IoDocumentTextSharp } from 'react-icons/io5';

export default function CTAButtons() {
	return (
		<p className='cta_button_container'>
			<button className='link_button cta_link'>
				<a href='#contact-me'>Let's talk!</a>
			</button>
			<a
				href='/AJ_Bates_Resume.pdf'
				type='resume/pdf'
				title='resume'
				target='_blank'
			>
				<IoDocumentTextSharp className='resume_link' />
			</a>
		</p>
	);
}
