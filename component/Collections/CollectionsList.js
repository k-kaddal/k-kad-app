import CollectionItem from './CollectionItem'
import { Grid } from '../../styles/Section.style'

const CollectionList = ({ collections }) => {
    return (
        <Grid>
            {collections.map(collection => (
                <CollectionItem key={collection.id} collection={collection} />
            ))}
        </Grid>
    )
}

export default CollectionList
