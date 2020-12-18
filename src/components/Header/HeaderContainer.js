import CTA from './CTA'
import './Header.css'
import Me from './Me'
import NavMenu from './NavMenu'

export default function HeaderContainer() {
    return (
        <header>
            <NavMenu />
            <CTA />
            <Me />
        </header>
    )
}