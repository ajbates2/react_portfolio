import './Footer.css';
import {
	IoDocumentTextSharp,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMailSharp,
} from 'react-icons/io5';

export default function FooterContainer() {
	return (
		<footer id='contact-me'>
			<address>
				<div className='footer_icon_pair'>
					<a
						href='mailto:aj.bates2.92@gmail.com'
						target='_blank'
						rel='noreferrer'
						title='Email'
					>
						<IoMailSharp className='footer_icon' />
					</a>
					<aside>Email</aside>
				</div>
				<div className='footer_icon_pair'>
					<a
						href='https://www.linkedin.com/in/ajbates2/'
						target='_blank'
						rel='noreferrer'
						title='LinkedIn Profile'
					>
						<IoLogoLinkedin className='footer_icon' />
					</a>
					<aside>LinkedIn</aside>
				</div>
				<div className='footer_icon_pair'>
					<a
						href='https://github.com/ajbates2'
						target='_blank'
						rel='noreferrer'
						title='GitHub Profile'
					>
						<IoLogoGithub className='footer_icon' />
					</a>
					<aside>GitHub</aside>
				</div>
				<div className='footer_icon_pair'>
					<a
						href='/AJ_Bates_Resume.pdf'
						type='resume/pdf'
						title='Resume'
						target='_blank'
					>
						<IoDocumentTextSharp className='footer_icon' />
					</a>
					<aside>Resume</aside>
				</div>
			</address>
		</footer>
	);
}
