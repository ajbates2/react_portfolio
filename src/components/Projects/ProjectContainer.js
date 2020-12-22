import STORE from "../../STORE"
import ProjectLinks from "./ProjectLinks"
import ProjectScreen from "./ProjectScreen"
import TechUsed from "./TechUsed"
import './Projects.css'

export default function ProjectContainer() {

    const block = STORE.map((app, i) => {
        return (
            <div key={i}>
                <h2 className='project_title'>
                    {app.name}
                </h2>
                <ProjectScreen
                    link={app.links.liveSite}
                    img={app.screenshot}
                    name={app.name}
                />
                <p className='project_bio'>
                    {app.bio}
                </p>
                <ProjectLinks links={app.links} />
                <TechUsed tech={app.techUsed} />
            </div>
        )
    })

    return (
        <section>
            {block}
        </section>
    )
}