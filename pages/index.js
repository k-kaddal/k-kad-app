import { server } from '../config'
// import ProjectsList from '../component/Projects/ProjectsList'
import { Page } from '../styles/Section.style'

export default function Home({ projects }) {
    return <Page>{/* <ProjectsList projects={projects} /> */}</Page>
}

// // FETCH DATA
// // // 1] STATIC
// export const getStaticProps = async () => {
//     const resProjects = await fetch(`${server}/api/projects`)
//     const projects = await resProjects.json()

//     return {
//         props: {
//             projects,
//         },
//         // unstable_revalidate: 1,
//     }
// }
