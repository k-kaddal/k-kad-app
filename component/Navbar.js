import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, Nav, Logo, MenuLink, Hamburger } from '../styles/Nav.style'
import styled from 'styled-components'
import { artists } from '../data/artists'
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

const Navbar = () => {
    const artist = artists[0]
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Link href="/">
                    <Logo>K-KADDAL</Logo>
                </Link>
            </div>
            <Menu isOpen={isOpen}>
                <MenuLink onClick={() => setIsOpen(!isOpen)}>
                    <Link href="/about"> About </Link>
                </MenuLink>
                <MenuLink onClick={() => setIsOpen(!isOpen)}>
                    <Link href="/projects"> Projects </Link>
                </MenuLink>
                {/* <MenuLink onClick={() => setIsOpen(!isOpen)}>
                    <Link href="/studios"> Studio </Link>
                </MenuLink> */}
                <MenuLink onClick={() => setIsOpen(!isOpen)}>
                    <Link href="/collections"> NFT </Link>
                </MenuLink>
            </Menu>

            {/* <SocialMedia>
                <a href={`${artist.links.facebook}`} target="_blank">
                    <Icon display={artist.links.facebook ? null : 'none'}>
                        <FaFacebook />
                    </Icon>
                </a>
                <a href={`${artist.links.twitter}`} target="_blank">
                    <Icon display={artist.links.twitter ? null : 'none'}>
                        <FaTwitter />
                    </Icon>
                </a>
                <a href={`${artist.links.instagram}`} target="_blank">
                    <Icon display={artist.links.instagram ? null : 'none'}>
                        <FaInstagram />
                    </Icon>
                </a>
                <a href={`${artist.links.vimeo}`} target="_blank">
                    <Icon display={artist.links.vimeo ? null : 'none'}>
                        <FaVimeoV />
                    </Icon>
                </a>
                <a href={`${artist.links.youtube}`} target="_blank">
                    <Icon display={artist.links.youtube ? null : 'none'}>
                        <FaYoutube />
                    </Icon>
                </a>
                <a href={`${artist.links.github}`} target="_blank">
                    <Icon display={artist.links.github ? null : 'none'}>
                        <FaGithub />
                    </Icon>
                </a>
                <a href={`${artist.links.linkedin}`} target="_blank">
                    <Icon display={artist.links.linkedin ? null : 'none'}>
                        <FaLinkedin />
                    </Icon>
                </a>
                <a href={`${artist.links.discord}`} target="_blank">
                    <Icon display={artist.links.discord ? null : 'none'}>
                        <FaLinkedin />
                    </Icon>
                </a>
            </SocialMedia> */}
        </Nav>
    )
}

const SocialMedia = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    margin: 1rem;

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

const Icon = styled.span`
    display: ${({ display }) => display};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
        color: ${({ theme }) => theme.colors.minor};
    }
`

export default Navbar
