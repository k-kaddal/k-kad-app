import { collections } from '../../../data/collections'

export default function handler(req, res) {
    res.status(200).json(collections)
}
