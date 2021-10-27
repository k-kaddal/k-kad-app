import CollectionItem from './CollectionItem'
import { Page } from '../../styles/Section.style'

const CollectionList = ({ collections }) => {
    return (
        <Page>
            {collections.map(collection => (
                <CollectionItem key={collection.id} collection={collection} />
            ))}
        </Page>
    )
}

export default CollectionList
