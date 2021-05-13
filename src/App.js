import { lazy, Suspense, useEffect, useState } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import NavMenu from './components/Nav/NavMenu';

const AboutContainer = lazy(() => import('./components/About/AboutContainer'));
const ProjectContainer = lazy(() =>
	import('./components/Projects/ProjectContainer')
);
const FooterContainer = lazy(() =>
	import('./components/Footer/FooterContainer')
);

export default function App() {
	const [activeEl, setActiveEl] = useState('header');

	const listenScrollEvent = (e) => {
		if (window.scrollY < window.innerHeight - 200) {
			return setActiveEl('header');
		}
		if (
			window.scrollY > window.innerHeight - 200 &&
			window.scrollY < window.innerHeight + 300
		) {
			return setActiveEl('about');
		}
		if (window.scrollY > window.innerHeight + 300) {
			return setActiveEl('projects');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	}, []);

	return (
		<div className='App'>
			<NavMenu />
			<HeaderContainer
				background={activeEl === 'header' ? 'current_line' : 'inactive'}
			/>
			<Suspense fallback={<div>loading...</div>} >
				<main className='main-container'>
					<AboutContainer
						background={
							activeEl === 'about' ? 'current_line' : 'inactive'
						}
					/>
					<ProjectContainer
						background={
							activeEl === 'projects'
								? 'current_line'
								: 'inactive'
						}
					/>
				</main>
				<FooterContainer />
			</Suspense>
		</div>
	);
}
