import CollectionItem from './CollectionItem'
import collectionStyles from '../../styles/Collection.module.css'

const CollectionList = ({ collections }) => {
    return (
        <div className={collectionStyles.grid}>
            {collections.map(collection => (
                <CollectionItem key={collection.id} collection={collection} />
            ))}
        </div>
    )
}

export default CollectionList
