import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

    @import url(${({ theme }) => theme.fontUrl});


    * {
        box-sizing:border-box;
        transition: all 0.75s ease;
        border-radius: 4px;
    }

    body {
        background-color: ${({ theme }) => theme.colors.major};
        color:${({ theme }) => theme.colors.accent};
        font-family: 'Zen Kaku Gothic New', sans-serif;
        letter-spacing: 0.1rem;
        margin: 0;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Left = styled.div`
    display: flex;
    text-align: center;
    width: 10%;
    @media (max-width: 768px) {
        width: 100vw;
    }
`
export const Right = styled.div`
    display: flex;
    text-align: center;
    width: 90%;
    @media (max-width: 768px) {
        width: 100vw;
    }
`
