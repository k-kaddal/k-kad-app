import styled from 'styled-components'

export const Page = styled.div`
    /* display: flex;
    flex-direction: column; */
    padding: 1rem;
    width: 100%;
    /* border: thin solid red; */
`

export const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem 1rem;

    margin: 1rem;
    @media (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const About = styled.div`
    margin: 1rem;
    padding: 1rem 2rem;
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    box-shadow: 0px 0px 1px 0.5px ${({ theme }) => theme.colors.minor};

    &:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
        max-width: 35vw;
        padding: 0.5rem;
    }

    &:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`

export const Right = styled.div`
    padding-left: 1rem;
    text-align: start;
    width: 35vw;
    height: 100%;
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
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
        background-color: ${({ theme }) =>
            theme.colors.rnd[
                Math.floor(Math.random() * theme.colors.rnd.length)
            ]};
    }
`
