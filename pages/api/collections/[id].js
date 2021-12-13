import { collections } from '../../../data/collections'

export default function handler({ query: { id } }, res) {
    const filtered = collections.filter(collection => collection.id === id)

    if (filtered.length > 0) {
        res.status(200).json(JSON.stringify(filtered[0]))
    } else {
        res.status(400).json({
            message: `collection with the ID of ${id} is not found`,
        })
    }
}
