import { server } from '../config'
import React from 'react'
import { Tag, SubTitle, Title, Paragraph } from '../styles/Fonts.style'
import { Button, Page } from '../styles/Section.style'
import styled from 'styled-components'
import theme from '../styles/Theme'
import Link from 'next/link'

const Studio = ({ studios }) => {
    const studio = studios[0]

    console.log(studios)

    return (
        <Page>
            <Main>
                <CV style={{ flexDirection: 'column' }}>
                    <Section id="team">
                        <SubTitle color={theme.colors.accent}>| Team</SubTitle>
                    </Section>
                    <Section id="gallery">
                        <SubTitle color={theme.colors.accent}>
                            | Gallery
                        </SubTitle>
                    </Section>
                    <Section id="partners">
                        <SubTitle color={theme.colors.accent}>
                            | Partners
                        </SubTitle>
                    </Section>
                </CV>
            </Main>
        </Page>
    )
}

export default Studio

// FETCH DATA
// // 1] STATIC
export const getStaticProps = async () => {
    const resStudios = await fetch(`${server}/api/studios`)
    const studios = await resStudios.json()

    return {
        props: {
            studios,
        },
        unstable_revalidate: 1,
    }
}

const Main = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

const Section = styled.div`
    padding: 1rem;
    text-align: left;
`

const CV = styled.div`
    margin-right: 1rem;
    padding: 1rem;
    text-align: left;
    width: 68%;

    @media (max-width: 768px) {
        width: 100%;
    }
`
