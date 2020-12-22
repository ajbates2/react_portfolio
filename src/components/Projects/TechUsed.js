import { GrReactjs, GrNode } from "react-icons/gr";
import { DiCss3, DiHtml5, DiJqueryLogo } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

export default function TechUsed(prop) {
    return (
        <div className='project_tech'>
            {!prop.tech.html ? null :
                <DiHtml5 className='tech_icon' />
            }
            {!prop.tech.css ? null :
                <DiCss3 className='tech_icon' />
            }
            {!prop.tech.jQuery ? null :
                <DiJqueryLogo className='tech_icon' />
            }
            {!prop.tech.react ? null :
                <GrReactjs className='tech_icon' />
            }
            {!prop.tech.node ? null :
                <GrNode className='tech_icon' />
            }
            {!prop.tech.postgresql ? null :
                <SiPostgresql className='tech_icon' />
            }
        </div>
    )
}