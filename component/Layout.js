import Navbar from './Navbar'
import Meta from './Meta'
import theme from '../styles/Theme'
import { GlobalStyle, Main, Left, Right } from '../styles/Global.style'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => {
    // console.log(artists)
    return (
        <ThemeProvider theme={theme}>
            <>
                <Meta />
                <GlobalStyle />
                <Main>
                    <Left>
                        <Navbar />
                    </Left>
                    <Right>{children}</Right>
                </Main>
            </>
        </ThemeProvider>
    )
}

export default Layout
