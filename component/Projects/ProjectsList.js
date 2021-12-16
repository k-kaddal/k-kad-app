import ProjectItem from './ProjectItem'
import { Page, Grid } from '../../styles/Section.style'

const ProjectsList = ({ projects }) => {
    const sortedProjects = projects.sort((a, b) => a.id - b.id)
    return (
        <Grid>
            {sortedProjects.map((project, key) => (
                <ProjectItem key={key} project={project} />
            ))}
        </Grid>
    )
}

export default ProjectsList
