import CTA from './CTA'
import './Header.css'
import Me from './Me'

export default function HeaderContainer() {
    return (
        <header className='header_container' id='home'>
            <CTA />
            <Me />
        </header>
    )
}