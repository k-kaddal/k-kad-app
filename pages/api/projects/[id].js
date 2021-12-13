import { projects } from '../../../data/projects'

export default function handler({ query: { id } }, res) {
    const filtered = projects.filter(project => project.id === id)

    if (filtered.length > 0) {
        res.status(200).json(JSON.stringify(filtered[0]))
    } else {
        res.status(400).json({
            message: `project with the ID of ${id} is not found`,
        })
    }
}
