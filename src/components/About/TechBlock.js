import { GrReactjs, GrNode } from 'react-icons/gr';
import {
	DiCss3,
	DiGitBranch,
	DiGithubAlt,
	DiHtml5,
	DiJqueryLogo,
} from 'react-icons/di';
import { SiJest, SiMocha, SiPostgresql, SiReactrouter } from 'react-icons/si';

export default function TechBlock() {
    
	return (
		<>
			<div className='icon_pair'>
				<GrReactjs className='tech_icon' />
				<aside>React</aside>
			</div>
			<div className='icon_pair'>
				<SiReactrouter className='tech_icon' />
				<aside>React Router</aside>
			</div>
			<div className='icon_pair'>
				<SiJest className='tech_icon' />
				<aside>Jest</aside>
			</div>
			<div className='icon_pair'>
				<GrNode className='tech_icon' />
				<aside>Node.js</aside>
			</div>
			<div className='icon_pair'>
				<GrNode className='tech_icon' />
				<aside>Express.js</aside>
			</div>
			<div className='icon_pair'>
				<SiMocha className='tech_icon' />
				<aside>Mocha</aside>
			</div>
			<div className='icon_pair'>
				<DiCss3 className='tech_icon' />
				<aside>CSS3</aside>
			</div>
			<div className='icon_pair'>
				<DiHtml5 className='tech_icon' />
				<aside>HTML5</aside>
			</div>
			<div className='icon_pair'>
				<DiJqueryLogo className='tech_icon' />
				<aside>jQuery</aside>
			</div>
			<div className='icon_pair'>
				<SiPostgresql className='tech_icon' />
				<aside>Postgresql</aside>
			</div>
			<div className='icon_pair'>
				<DiGitBranch className='tech_icon' />
				<aside>Git</aside>
			</div>
			<div className='icon_pair'>
				<DiGithubAlt className='tech_icon' />
				<aside>GitHub</aside>
			</div>
		</>
	);
}
