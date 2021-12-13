import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

    /* @import url(${({ theme }) => theme.fontUrl}); */


    * {
        box-sizing:border-box;
        transition: all 0.75s ease;
        border-radius: 4px;

        a{
            text-decoration: none;
        }
    }

    body {
        background-color: ${({ theme }) => theme.colors.major};
        color:${({ theme }) => theme.colors.accent};
        font-family: 'Zen Kaku Gothic New', sans-serif;
        letter-spacing: 0.1rem;
        margin: 0;
    }

    ::-webkit-scrollbar{
        width:5px;
    }

    ::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.colors.major};
    }

    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.colors.accent_soft};
        border-radius:25px;
    }

    ::-webkit-scrollbar-thumb:hover{
        background: ${({ theme }) => theme.colors.accent};
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
