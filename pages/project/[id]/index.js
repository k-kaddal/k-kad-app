import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'
import { Page, About } from '../../../styles/Section.style'
import { Tag, Title, Paragraph } from '../../../styles/Fonts.style'
import theme from '../../../styles/Theme'
import ReactPlayer from 'react-player'

const project = ({ project }) => {
    var description = project.description.split('\n')

    return (
        <Page>
            <About>
                <Title>{project.title.toUpperCase()} </Title>
                <Tag color={theme.colors.accent} fontWeight="normal">
                    {project.year}
                </Tag>

                <Tag fontWeight="100">#{project.tags.join(', #')}</Tag>
            </About>

            {project.video ? (
                <ReactPlayer
                    playing={true}
                    width="100%"
                    height="85%"
                    controls={true}
                    url={project.video}
                />
            ) : null}

            {description.map((line, key) => {
                return (
                    <Paragraph key={key} fontWeight="lighter">
                        {line}
                    </Paragraph>
                )
            })}
            {/* <ArtworkList project={project} /> */}
        </Page>
    )
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async context => {
    const res = await fetch(`${server}/api/projects/${context.params.id}`)
    const project = await res.json()

    return {
        props: { project },
        // unstable_revalidate: 1,
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()
    const ids = projects.map(a => a.id)
    const paths = ids.map(id => ({ params: { id: '' + id } }))

    return {
        paths,
        fallback: false,
    }
}

export default project
