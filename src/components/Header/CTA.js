import { IoIosBeer } from "react-icons/io";
import { CgMusicSpeaker } from "react-icons/cg";
import { GiConverseShoe } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";

export default function CTA() {
  return (
    <div className="header_cta">
      <h1 className="my_name">AJ Bates</h1>
      <p className="cta_icons">
        <IoIosBeer />
        <CgMusicSpeaker />
        <GiConverseShoe />
        <GrReactjs />
      </p>
      <h2 className="cta_description">Full-stack JavaScript developer</h2>
      <p>
        <a href="#contact-me" className="link_button cta_link">
          Let's talk!
        </a>
      </p>
    </div>
  );
}
