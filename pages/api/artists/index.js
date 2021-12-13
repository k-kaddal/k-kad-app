import { artists } from '../../../data/artists'

export default function handler(req, res) {
    res.status(200).json(JSON.stringify(artists))
}
