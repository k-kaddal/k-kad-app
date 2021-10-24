import Navbar from './Navbar'
import Meta from './Meta'
import { GlobalStyle, Main } from '../styles/Global.style'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        major: 'black',
        minor: 'white',
        accent: '#40e0d0',
        accent_soft: '#40e0d080',
    },
    fontUrl:
        'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap',
}

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Meta />
                <Navbar />
                <Main>
                    <GlobalStyle />
                    {children}
                </Main>
            </>
        </ThemeProvider>
    )
}

export default Layout
