import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Title, SubTitle, Paragraph, Tag } from '../../styles/Fonts.style'
import theme from '../../styles/Theme'
import Projects from '../../pages/projects'
import styled from 'styled-components'

const ProjectItem = ({ project }) => {
    const basePath = '/images'
    const image = project.images[0]

    const [isShown, setIsShown] = useState(false)

    return (
        <Link href="/project/[id]" as={`/project/${project.id}`}>
            <Card
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <img alt={`${project.imageAlt}`} src={`${basePath}/${image}`} />

                {isShown ? (
                    <About>
                        <SubTitle color={theme.colors.accent}>
                            {project.title.toUpperCase()}
                        </SubTitle>
                        <Tag fontWeight="100" color={theme.colors.accent}>
                            {project.year}
                        </Tag>
                        <Tag fontWeight="100">#{project.tags.join(', #')}</Tag>{' '}
                    </About>
                ) : null}
            </Card>
        </Link>
    )
}

export default ProjectItem

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 20rem;
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    justify-content: space-evenly;
    align-content: center;
    opacity: 100%;

    img {
        object-fit: contain;
        width: 100%;
    }

    :hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

const About = styled.div`
    background: ${({ theme }) => theme.colors.major};
    position: absolute;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-content: center;
    width: 20rem;
    height: 20rem;
    opacity: 90%;
`
