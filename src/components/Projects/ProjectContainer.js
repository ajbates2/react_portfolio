import STORE from '../../STORE';
import ProjectLinks from './ProjectLinks';
import ProjectScreen from './ProjectScreen';
import TechUsed from './TechUsed';
import './Projects.css';

export default function ProjectContainer(props) {
	const block = STORE.map((app, i) => {
		return (
			<div key={i}>
				<h2 className='project_title'>
					<span>{`< `}</span>
					<span className='pink'>{app.name}</span>
					<span>{` />`}</span>
				</h2>
				<ProjectScreen
					link={app.links.liveSite}
					img={app.screenshot}
					name={app.name}
				/>
				<p className='project_bio'>{app.bio}</p>
				<ProjectLinks links={app.links} />
				<TechUsed tech={app.techUsed} />
			</div>
		);
	});

	return (
		<section
			id='projects'
			className={`project_container ${props.background}`}
		>
			{block[0]}
		</section>
	);
}
