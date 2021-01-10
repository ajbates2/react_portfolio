import './About.css'

export default function AboutContainer(props) {
	return (
		<section className={`about-container ${props.background}`} id='about-me'>
			<p>
				Having worked in a restaurant and in the service industry
				for essentially my whole life, I work great in a team, and
				especially great in high stress situations. I can't wait to work
				with a great team of programmers and developers to apply my
				knowledge to a different challenge everyday.
			</p>
			<p className='fun-bio'>
				My love for technology is what ultimately pushed me to get into
				web development. I enjoy video games (built multiple PC's),
				movies, and music. When I'm not coding you might find me
				bartending (I love beer), or going to see some live music. Just
				like every other millennial I collect vinyl and shoes.
			</p>
		</section>
	);
}
