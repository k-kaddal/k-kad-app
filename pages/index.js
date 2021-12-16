import { server } from '../config'
import { Page } from '../styles/Section.style'
import styled from 'styled-components'

export default function Home() {
    return (
        <Page>
            <Video autoPlay muted loop>
                <source src="/videos/start.mp4" type="video/mp4" />
            </Video>
        </Page>
    )
}

const Video = styled.video`
    object-fit: fill;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: -1;

    @media (max-width: 768px) {
    }
`
