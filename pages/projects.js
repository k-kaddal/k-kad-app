import { server } from '../config'
import ProjectsList from '../component/Projects/ProjectsList'
import { Page } from '../styles/Section.style'

export default function Projects({ projects }) {
    return (
        <Page>
            <ProjectsList projects={projects} />
        </Page>
    )
}

// FETCH DATA
// // 1] STATIC
export const getStaticProps = async () => {
    const resProjects = await fetch(`${server}/api/projects`)
    const projects = await resProjects.json()

    return {
        props: {
            projects,
        },
    }
}
