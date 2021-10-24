// artist

import Link from 'next/link'
import artistStyles from '../../styles/Artist.module.css'

const ArtistItem = ({ artist }) => {
    return (
        <Link href="/artist/[id]" as={`/artist/${artist.id}`}>
            <a className={artistStyles.card}>
                <h3>{artist.name}</h3>
                <p>{artist.biography}</p>
            </a>
        </Link>
    )
}

export default ArtistItem
