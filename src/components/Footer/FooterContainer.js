import { TiMail, TiSocialGithubCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import './Footer.css'

export default function FooterContainer() {
  return (
    <footer id="contact-me">
      <h3>Contact Info</h3>
      <address>
        <a href="mailto:aj.bates2.92@gmail.com">
          <TiMail className='footer_icon' />
        </a>
        <a href="https://www.linkedin.com/in/ajbates2/" target="_blank"  rel="noreferrer">
          <TiSocialLinkedinCircular className='footer_icon' />
        </a>
        <a href="https://github.com/ajbates2" target="_blank"  rel="noreferrer">
          <TiSocialGithubCircular className='footer_icon' />
        </a>
      </address>
    </footer>
  );
}