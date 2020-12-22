export default function ProjectLinks(prop) {

    return (
        <div className='project_links'>
            <a href={prop.links.clientRepo}>Client Repo</a>
                {!prop.links.serverRepo
                    ? null
                    : <a href={prop.links.serverRepo}>Server Repo</a>
                }
                <a href={prop.links.liveSite}>Live App</a>
        </div>
    )
}