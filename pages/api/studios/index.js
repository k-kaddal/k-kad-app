import { studios } from '../../../data/studios'

export default function handler(req, res) {
    res.status(200).json(JSON.stringify(studios))
}
