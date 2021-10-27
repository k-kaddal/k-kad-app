import { server } from '../config'
import React from 'react'
import { Tag, SubTitle, Title, Paragraph } from '../styles/Fonts.style'
import { Button, Page } from '../styles/Section.style'
import styled from 'styled-components'
import theme from '../styles/Theme'
import Link from 'next/link'

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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Section>
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
                </Section>
                <ContactCard>
                    <img
                        alt={`${artist.image}`}
                        src={`${basePath}/${artist.image}`}
                    />
                    <Link href={`mailto:${artist.email}`}>
                        <a target="_blank" rel="noreferrer">
                            <Button>Send Email</Button>
                        </a>
                    </Link>
                </ContactCard>
            </div>
        </Page>
    )
}

export default About

const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 50%;
    /* border: thin solid blue; */

    img {
        width: 30rem;
        padding: 0.5rem;
        border: thin solid ${({ theme }) => theme.colors.accent_soft};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }

    img:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 10px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

const Section = styled.div`
    padding: 1rem;
    text-align: left;
    /* border-bottom: thin solid blue; */
`

// FETCH DATA
// // 1] STATIC
export const getStaticProps = async () => {
    const resArtists = await fetch(`${server}/api/artists`)
    const artists = await resArtists.json()

    return {
        props: {
            artists,
        },
    }
}

// import {
//     FaGithub,
//     FaEnvelope,
//     FaFacebook,
//     FaYoutube,
//     FaInstagram,
//     FaTwitter,
//     FaLinkedin
//   } from "react-icons/fa";

// <div className="foot">
// <a href="#">
//   <FaTwitter className="icon" />
// </a>
// <a href="#">
//   <FaInstagram className="icon" />
// </a>
// <a href="#">
//   <FaFacebook className="icon" />
// </a>
// <a href="#">
//   <FaYoutube className="icon" />
// </a>
// <a href="#">
//   <FaGithub className="icon" />
// </a>
// <a href="#">
//   <FaLinkedin className="icon" />
// </a>
// <a href="#">
//   <FaEnvelope className="icon" />
// </a>

// </div>
