import React, { useState } from 'react'
import Link from 'next/link'
import { server } from '../../../config'
import projects from '../../../data/projects.json'
import { Page, About, Button } from '../../../styles/Section.style'
import { Tag, Title, Paragraph } from '../../../styles/Fonts.style'
import theme from '../../../styles/Theme'
import ReactPlayer from 'react-player'
import Gallery from '../../../component/Projects/Gallery'
import styled from 'styled-components'

const project = ({ project }) => {
    const [isBar, setIsBar] = useState()

    var description = project.description.split('\n')
    const basePath = '/images'

    return (
        <Page>
            <About>
                <Title>{project.title.toUpperCase()} </Title>
                <Tag color={theme.colors.accent} fontWeight="normal">
                    {project.year}
                </Tag>

                <Tag fontWeight="100">#{project.tags.join(', #')}</Tag>

                <Bar>
                    <Button
                        style={{ padding: '0.5rem 1.5rem' }}
                        onClick={() => setIsBar('about')}
                    >
                        About
                    </Button>
                    <Button
                        style={{ padding: '0.5rem 1.5rem' }}
                        onClick={() => setIsBar('gallery')}
                    >
                        Gallery
                    </Button>
                    <Button
                        style={{ padding: '0.5rem 1.5rem' }}
                        onClick={() => setIsBar('video')}
                    >
                        Video
                    </Button>
                </Bar>
            </About>
            {!isBar ? (
                <Main style={{ marginTop: '1rem' }}>
                    <img
                        style={{ width: '65%' }}
                        src={`${basePath}/${project.images[0]}`}
                    />
                </Main>
            ) : null}
            <div>
                {isBar === 'about' ? (
                    <Section>
                        {description.map((line, key) => {
                            return (
                                <Paragraph key={key} fontWeight="lighter">
                                    {line}
                                </Paragraph>
                            )
                        })}
                    </Section>
                ) : null}

                {isBar === 'gallery' ? (
                    <Gallery images={project.images} />
                ) : null}
            </div>

            {project.video && isBar === 'video' ? (
                <div style={{ margin: '1rem', height: '100%' }}>
                    <ReactPlayer
                        // playing={true}
                        width="100%"
                        height="100%"
                        controls={true}
                        url={project.video}
                    />
                </div>
            ) : null}
        </Page>
    )
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async ({ params }) => {
    // const res = await fetch(`${server}/api/projects/${context.params.id}`)
    // const project = await res.json()

    const project = projects.find(project => project.id === params.id)

    return {
        props: { project },
        // unstable_revalidate: 1,
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    // const res = await fetch(`${server}/api/projects`)
    // const projects = await res.json()
    // const ids = projects.map(a => a.id)
    // const paths = ids.map(id => ({ params: { id: '' + id } }))

    const paths = projects.map(project => ({
        params: { id: project.id },
    }))

    return {
        paths,
        fallback: false,
    }
}

// STYLES
const Section = styled.div`
    width: 100%;
    height: 'auto';
    padding: 1rem;
    text-align: center;
`

const Bar = styled.div`
    width: 100%;
    text-align: center;
`

const Main = styled.div`
    img {
        border: thin solid ${({ theme }) => theme.colors.accent_soft};
        box-shadow: 0px 0px 1px 0.5px ${({ theme }) => theme.colors.minor};
    }
    img:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

export default project
