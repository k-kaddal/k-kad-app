import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, Nav, Logo, MenuLink, Hamburger } from '../styles/Nav.style'

const Navbar = () => {
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
                <MenuLink onClick={() => setIsOpen(!isOpen)}>
                    <Link href="/collections"> NFT </Link>
                </MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
