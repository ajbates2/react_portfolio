import CTA from './CTA';
import './Header.css';
import Me from './Me';

export default function HeaderContainer(props) {
	return (
		<header
			className={`header_container ${props.background}`}
			id='home'
		>
			<CTA />
			<Me />
		</header>
	);
}
