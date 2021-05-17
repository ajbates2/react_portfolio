export default function ProjectScreen(prop) {
	return (
		<a
			className='project_screen_link'
			href={prop.link}
			target='_blank'
			rel='noreferrer'
		>
			<img
				className='project_screen'
				src={prop.img}
				alt={`${prop.name} screenshot`}
			/>
		</a>
	);
}
