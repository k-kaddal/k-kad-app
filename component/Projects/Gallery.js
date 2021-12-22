import styled from 'styled-components'
// import { Grid } from '../../styles/Section.style'

const Gallery = ({ images }) => {
    const basePath = '/images'

    return (
        <Grid>
            {images.map((image, key) => (
                <div>
                    <img
                        style={{ width: '100%' }}
                        src={`${basePath}/${image}`}
                    />
                </div>
            ))}
        </Grid>
    )
}

export const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem 1rem;
    margin: 1rem;

    img {
        border: thin solid ${({ theme }) => theme.colors.accent_soft};
    }

    img:hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }

    @media (max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

// const Card = styled.div`
//     width: 50%;
//     height: 'auto';
//     border: thin solid ${({ theme }) => theme.colors.accent_soft};
//     align-self: center;
//     margin-left: 50%;

//     div {
//         /* margin-top: 1rem; */
//         padding: 1rem;
//     }

//     img {
//         object-fit: contain;
//         width: 100%;
//     }

//     & :hover {
//         border: thin solid ${({ theme }) => theme.colors.accent};
//         box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
//     }
// `

export default Gallery
