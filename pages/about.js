import { server } from '../config'
import React from 'react'
import { Tag, SubTitle, Title, Paragraph } from '../styles/Fonts.style'
import { Button, Page } from '../styles/Section.style'
import styled from 'styled-components'
import theme from '../styles/Theme'
import Link from 'next/link'
import {
    FaGithub,
    FaDiscord,
    FaEnvelope,
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaVimeoV,
} from 'react-icons/fa'

const About = ({ artists }) => {
    const artist = artists[0]
    const basePath = '/images'

    var bio = artist.biography.split('\n')

    const exhibitions = artist.events.filter(event =>
        event.tags.includes('exhibition')
    )
    const performances = artist.events.filter(event =>
        event.tags.includes('performance')
    )
    const conferences = artist.events.filter(event =>
        event.tags.includes('conference')
    )
    const press = artist.press

    return (
        <Page>
            <Main>
                <CV style={{ flexDirection: 'column' }}>
                    <Section id="bigraphy">
                        <SubTitle color={theme.colors.accent}>
                            | BIOGRAPHY
                        </SubTitle>
                        {bio.map((line, key) => {
                            return (
                                <Paragraph key={key} fontWeight="lighter">
                                    {line}
                                </Paragraph>
                            )
                        })}{' '}
                    </Section>
                    <Section id="exhibitions">
                        <SubTitle color={theme.colors.accent}>
                            | EXHIBITIONS
                        </SubTitle>
                        {exhibitions.map((event, key) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {' '}
                                    <Tag
                                        fontWeight="100"
                                        color={theme.colors.accent}
                                    >
                                        | {event.year} &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.title}, &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.venue}, &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.country} &nbsp;
                                    </Tag>
                                </div>
                            )
                        })}
                    </Section>
                    <Section id="performances">
                        <SubTitle color={theme.colors.accent}>
                            | PERFORMANCES
                        </SubTitle>
                        {performances.map((event, key) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {' '}
                                    <Tag
                                        fontWeight="100"
                                        color={theme.colors.accent}
                                    >
                                        | {event.year} &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.title}, &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.venue}, &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.country} &nbsp;
                                    </Tag>
                                </div>
                            )
                        })}
                    </Section>
                    <Section id="conferences">
                        <SubTitle color={theme.colors.accent}>
                            | CONFERENCES & TALKS
                        </SubTitle>
                        {conferences.map((event, key) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {' '}
                                    <Tag
                                        fontWeight="100"
                                        color={theme.colors.accent}
                                    >
                                        | {event.year} &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.title}, &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.venue}, &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.country} &nbsp;
                                    </Tag>
                                </div>
                            )
                        })}
                    </Section>
                    <Section id="press">
                        <SubTitle color={theme.colors.accent}>| PRESS</SubTitle>
                        {press.map((event, key) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Tag
                                        fontWeight="100"
                                        color={theme.colors.accent}
                                    >
                                        | {event.year} &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.publisher} : &nbsp;
                                    </Tag>
                                    <Tag key={key} fontWeight="100">
                                        {event.title} &nbsp;
                                    </Tag>
                                </div>
                            )
                        })}
                    </Section>
                </CV>

                {/* TO BE REAFCTORED  */}

                <ContactCard>
                    <img
                        alt={`${artist.image}`}
                        src={`${basePath}/${artist.image}`}
                    />
                    <SocialMedia>
                        <a href={`${artist.links.facebook}`} target="_blank">
                            <Icon
                                display={artist.links.facebook ? null : 'none'}
                            >
                                <FaFacebook />
                            </Icon>
                        </a>
                        <a href={`${artist.links.twitter}`} target="_blank">
                            <Icon
                                display={artist.links.twitter ? null : 'none'}
                            >
                                <FaTwitter />
                            </Icon>
                        </a>
                        <a href={`${artist.links.instagram}`} target="_blank">
                            <Icon
                                display={artist.links.instagram ? null : 'none'}
                            >
                                <FaInstagram />
                            </Icon>
                        </a>
                        <a href={`${artist.links.vimeo}`} target="_blank">
                            <Icon display={artist.links.vimeo ? null : 'none'}>
                                <FaVimeoV />
                            </Icon>
                        </a>
                        <a href={`${artist.links.youtube}`} target="_blank">
                            <Icon
                                display={artist.links.youtube ? null : 'none'}
                            >
                                <FaYoutube />
                            </Icon>
                        </a>
                        <a href={`${artist.links.github}`} target="_blank">
                            <Icon display={artist.links.github ? null : 'none'}>
                                <FaGithub />
                            </Icon>
                        </a>
                        <a href={`${artist.links.linkedin}`} target="_blank">
                            <Icon
                                display={artist.links.linkedin ? null : 'none'}
                            >
                                <FaLinkedin />
                            </Icon>
                        </a>
                        <a href={`${artist.links.discord}`} target="_blank">
                            <Icon
                                display={artist.links.discord ? null : 'none'}
                            >
                                <FaLinkedin />
                            </Icon>
                        </a>
                    </SocialMedia>

                    <Link href={`mailto:${artist.links.email}`}>
                        <a target="_blank" rel="noreferrer">
                            <Button style={{ width: '100%' }}>
                                SEND EMAIL
                            </Button>
                        </a>
                    </Link>
                </ContactCard>
            </Main>
        </Page>
    )
}

export default About

// FETCH DATA
// // 1] STATIC
export const getStaticProps = async () => {
    const resArtists = await fetch(`${server}/api/artists`)
    const artists = await resArtists.json()

    return {
        props: {
            artists,
        },
        unstable_revalidate: 1,
    }
}

const ContactCard = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    padding: 1rem;
    width: 30%;
    align-items: stretch;

    img {
        align-self: center;
        width: 100%;
        padding: 0.5rem;
        margin: 1rem;
        border: thin solid ${({ theme }) => theme.colors.accent_soft};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }

    img:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 10px 0.5px ${({ theme }) => theme.colors.minor};
    }

    @media (max-width: 768px) {
        position: relative;
        width: 100%;
    }
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

const SocialMedia = styled.div`
    display: inline-block;
    margin: 0rem 0.5rem;
`

const Icon = styled.span`
    display: ${({ display }) => display};
    margin: 0rem 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
        color: ${({ theme }) => theme.colors.minor};
    }
`
