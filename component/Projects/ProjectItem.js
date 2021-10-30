import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Title, SubTitle, Paragraph, Tag } from '../../styles/Fonts.style'
import theme from '../../styles/Theme'
import Projects from '../../pages/projects'
import styled from 'styled-components'

const ProjectItem = ({ project }) => {
    const basePath = '/images'
    const image = project.gallery[0]

    return (
        <Card>
            <img alt={`${project.imageAlt}`} src={`${basePath}/${image}`} />

            <div hidden>
                <SubTitle color={theme.colors.accent}>
                    {project.title.toUpperCase()}
                </SubTitle>
                <Tag>{project.year}</Tag>
            </div>
        </Card>
    )
}

export default ProjectItem

const Card = styled.div`
    display: flex;
    width: 20rem;
    height: 20rem;
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    justify-content: center;
    align-content: center;
    /* margin: 2rem; */

    img {
        object-fit: contain;
        width: 100%;
    }

    :hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`
