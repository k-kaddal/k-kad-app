import { artists } from '../../../data/artists'

export default function handler({ query: { id } }, res) {
    const filtered = artists.filter(article => article.id === id)

    if (filtered.length > 0) {
        res.status(200).json(JSON.stringify(filtered[0]))
    } else {
        res.status(400).json({
            message: `Article with the ID of ${id} is not found`,
        })
    }
}
