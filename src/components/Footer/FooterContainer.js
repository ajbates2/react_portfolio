import './Footer.css';
import {
	IoDocumentTextSharp,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMailSharp,
} from 'react-icons/io5';
import resume from '../../AJ_Bates_Resume.pdf';

export default function FooterContainer() {
	return (
		<footer id='contact-me'>
			<h3 className='footer_title'>Contact Info</h3>
			<address>
				<a
					href='mailto:aj.bates2.92@gmail.com'
					target='_blank'
					rel='noreferrer'
					title='Email'
				>
					<IoMailSharp className='footer_icon' />
				</a>
				<a
					href='https://www.linkedin.com/in/ajbates2/'
					target='_blank'
					rel='noreferrer'
					title='LinkedIn Profile'
				>
					<IoLogoLinkedin className='footer_icon' />
				</a>
				<a
					href='https://github.com/ajbates2'
					target='_blank'
					rel='noreferrer'
					title='GitHub Profile'
				>
					<IoLogoGithub className='footer_icon' />
				</a>
				<a href={resume} type='resume/pdf' title='Resume' download>
					<IoDocumentTextSharp className='footer_icon' />
				</a>
			</address>
		</footer>
	);
}
