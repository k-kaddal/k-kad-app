import ProjectItem from './ProjectItem'
import { Page, Grid } from '../../styles/Section.style'

const ProjectsList = ({ projects }) => {
    return (
        <Grid>
            {projects.map((project, key) => (
                <ProjectItem key={key} project={project} />
            ))}
        </Grid>
    )
}

export default ProjectsList
