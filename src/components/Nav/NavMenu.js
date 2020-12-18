import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import NavList from "./NavList";
import './Nav.css'

export default function NavMenu() {
    const [menu, openMenu] = useState(false)

    return (
        <nav>
            <VscMenu
                onClick={() => openMenu(!menu)}
            />
            { !menu
                ? ''
                : <NavList closeMenu={() => openMenu(!menu)} />
            }
        </nav>
    )
}