import { useTrail, animated, config } from "react-spring";

export default function NavList(prop) {
  const list = [
    <a href="#home">Home</a>,
    <a href="#about-me">About Me</a>,
    <a href="#projects">Projects</a>,
    <a href="#contact-me">Contact Me</a>
  ]

  const trail = useTrail(list.length, {
      position: 'relative',
      right: !prop.menuState ? -300 : 0,
      opacity: !prop.menuState ? 0 : 1,
      config: {mass: 1, tension: 345, friction: 40}
    });

  return(
  <ul className="nav_list">
      {trail.map((props, i) => 
          <animated.li key={i} style={props} className="nav_list_item" onClick={prop.closeMenu}>
              {list[i]}
          </animated.li>
      )
    }
  </ul>
  )
}
