import styled from 'styled-components'

export const Grid = styled.section`
    width: 100%;
    /* border: thin solid red; */
    padding: 1rem;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 0rem;
`

export const Left = styled.div`
    display: flex;
    justify-content: center;
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    img {
        object-fit: contain;
        max-width: 50vw;
        padding: 0.5rem;
    }

    &:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        /* border-right: 0; */
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

export const Right = styled.div`
    padding-left: 1rem;
    text-align: start;
    width: 50vw;
    height: 100%;
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        /* border-left: 0; */
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

export const Button = styled.button`
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 1rem 1rem 1rem 0rem;
    padding: 15px 32px;

    color: ${({ theme }) => theme.colors.minor};
    background-color: ${({ theme }) => theme.colors.major};

    &:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`
