export default function ProjectLinks(prop) {
	return (
		<div className='project_links'>
			<a
				href={prop.links.clientRepo}
				className='link_button project_link'
				target='_blank'
				rel='noreferrer'
			>
				Client Repo
			</a>
			{!prop.links.serverRepo ? null : (
				<a
					href={prop.links.serverRepo}
					className='link_button project_link'
					target='_blank'
					rel='noreferrer'
				>
					Server Repo
				</a>
			)}
			<a
				href={prop.links.liveSite}
				className='link_button project_link'
				target='_blank'
				rel='noreferrer'
			>
				Live App
			</a>
		</div>
	);
}
