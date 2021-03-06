import styled from 'styled-components'

export const Logo = styled.h3`
    color: ${({ theme }) => theme.colors.accent};
    &:hover {
        color: ${({ theme }) => theme.colors.minor};
    }
`

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    z-index: 1;
    @media (max-width: 768px) {
        position: relative;
        width: 100vw;
    }
`

export const Menu = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: left;
    border-left: thin solid ${({ theme }) => theme.colors.accent_soft};

    &:hover {
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
        border: thin solid ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: 768px) {
        overflow: hidden;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        text-align: center;
        border-top: thin solid ${({ theme }) => theme.colors.accent_soft};
        border-bottom: thin solid
            ${({ isOpen, theme }) =>
                isOpen ? theme.colors.accent_soft : 'none'};
        border-left: none;
    }
`

export const MenuLink = styled.li`
    a {
        display: block;
        color: ${({ theme }) => theme.colors.minor};
        padding: 0.5rem 0.9rem;
        font-size: 0.7rem;
        text-decoration: none;
    }
    & a:hover {
        color: ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: 768px) {
        a {
            font-size: 1.5rem;
        }
    }
`

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin: 10px;

    span {
        height: 1px;
        width: 25px;
        background: ${({ theme }) => theme.colors.accent};
        margin-bottom: 5px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`
