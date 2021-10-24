import React from 'react'
import Link from 'next/link'
import { Menu, Nav, Logo, MenuLink } from '../styles/Nav.style'

const Navbar = () => {
    return (
        <Nav>
            <Link href="/">
                <Logo>K.KADDAL</Logo>
            </Link>
            <Menu>
                <MenuLink>
                    <Link href="/about"> About </Link>
                </MenuLink>
                <MenuLink>
                    <Link href="/projects"> Projects </Link>
                </MenuLink>
                <MenuLink>
                    <Link href="/collections"> NFT </Link>
                </MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
