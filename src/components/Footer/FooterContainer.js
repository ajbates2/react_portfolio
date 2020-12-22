import './Footer.css'
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt, VscMail  } from "react-icons/vsc";

export default function FooterContainer() {
  return (
    <footer id="contact-me">
      <h3>Contact Info</h3>
      <address>
        <a href="mailto:aj.bates2.92@gmail.com">
          <VscMail className='footer_icon' />
        </a>
        <a href="https://www.linkedin.com/in/ajbates2/" target="_blank"  rel="noreferrer">
          <AiOutlineLinkedin className='footer_icon' />
        </a>
        <a href="https://github.com/ajbates2" target="_blank"  rel="noreferrer">
          <VscGithubAlt className='footer_icon' />
        </a>
      </address>
    </footer>
  );
}