import { studios } from '../../../data/studios'

export default function handler({ query: { id } }, res) {
    const filtered = studios.filter(studio => studio.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(400).json({
            message: `project with the ID of ${id} is not found`,
        })
    }
}
