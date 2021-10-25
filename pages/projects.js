import { server } from '../config'
import ProjectsList from '../component/Projects/ProjectsList'

export default function Projects({ projects }) {
    return (
        <>
            <ProjectsList projects={projects} />
        </>
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
