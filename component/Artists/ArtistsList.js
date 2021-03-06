import ArtistItem from './ArtistItem'

const ArtistList = ({ artists }) => {
    return (
        <div className={artistStyles.grid}>
            {artists.map(artist => (
                <ArtistItem key={artist.id} artist={artist} />
            ))}
        </div>
    )
}

export default ArtistList
