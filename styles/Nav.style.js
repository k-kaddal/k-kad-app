import styled from 'styled-components'

export const Logo = styled.h3`
    color: ${({ theme }) => theme.colors.accent};
`

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    padding: 1rem;
    z-index: 1;
`

export const Menu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: auto;
    border-left: thin solid ${({ theme }) => theme.colors.accent_soft};
    font-size: 0.8rem;

    &:hover {
        /* border-color: ${({ theme }) => theme.colors.accent}; */
    }
`

export const MenuLink = styled.li`
    a {
        display: block;
        color: ${({ theme }) => theme.colors.minor};
        padding: 0.5rem 0.9rem;
        text-decoration: none;
    }
    & a:hover {
        color: ${({ theme }) => theme.colors.accent};
        padding: 0.5rem 1rem;
    }
`

export const Hamburger = styled.div``
